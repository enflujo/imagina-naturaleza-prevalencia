import { aRadianes } from '@enflujo/alquimia';
import type { IMapearCoordenadas, Punto } from '@enflujo/alquimia/libreria/modulos/tipos';
import type { MultiPolygon, Polygon, Position } from 'geojson';

/**
 * Permite definir el los tipos (Typescript) al pedir los datos
 *
 * @ejemplo
 * ```
 * const datos = pedirDatos<AlgunTipoOInterface>('...');
 * ```
 * @param url URL donde están los datos en formato JSON
 * @param config Opciones de `fetch()` https://developer.mozilla.org/en-US/docs/Web/API/fetch#options
 * @returns Datos en JSON
 */
export async function pedirDatos<Respuesta>(url: string, config: RequestInit = {}): Promise<Respuesta> {
  const res = await fetch(url, config);
  const datos = await res.json();
  return datos as Respuesta;
}

export function calcularPorcentaje(valor: number, porcentaje: number) {
  return valor * (porcentaje / 100);
}

const crearSeccionSvg = (
  punto: Position,
  cabeza: string,
  mapearCoordenadas: IMapearCoordenadas,
  ancho: number,
  alto: number
) => {
  const coordenadas = mapearCoordenadas(punto, ancho, alto);
  return `${cabeza}${coordenadas.x | 0} ${coordenadas.y | 0} `;
};

/**
 * Averigua si cada `grupo` de coordenadas es un polígono o un multipolígono y a la
 * variable `res` (respuesta), que contiene los datos de los SVG, le agrega la
 * ubicación de cada punto y sus líneas conectoras.
 *
 * `M` = _moveTo_ (Inicio del _path_. `M{punto.x} {punto.y}`)
 *
 * `L` = _lineTo_ (Punto de una línea. `L{punto.x} {punto.y}`)
 *
 * `Z` = _closePath_ (Fin del _path_. `Z`)
 * @param geometria Array de coordenadas
 * @param mapearCoordenadas Función para mapear de latitud, longitud a pixeles.
 * @param ancho Ancho en pixeles del contenedor.
 * @param alto Alto en pixeles del contenedor.
 * @returns res contiene los datos de los elementos SVG<path>
 */
export const crearLinea = (
  geometria: Polygon | MultiPolygon,
  mapearCoordenadas: IMapearCoordenadas,
  ancho: number,
  alto: number
): string => {
  let res = '';

  geometria.coordinates.forEach((grupo: Position[] | Position[][]): void => {
    grupo.forEach((posicion, i) => {
      const cabeza = i === 0 ? 'M' : 'L';

      if (typeof posicion[0] === 'object') {
        (posicion as Position[]).forEach((puntoMulti: Position, j: number): void => {
          if (j === 0) {
            res += crearSeccionSvg(puntoMulti, 'M', mapearCoordenadas, ancho, alto);
          } else {
            res += crearSeccionSvg(puntoMulti, 'L', mapearCoordenadas, ancho, alto);
          }
        });
      } else {
        res += crearSeccionSvg(posicion as Position, cabeza, mapearCoordenadas, ancho, alto);
      }

      res += i === grupo.length - 1 ? 'Z' : '';
    });
  });

  return res;
};
const PI_CUARTO = Math.PI / 4;
export const mercatorY = (latitud: number): number => Math.log(Math.tan(latitud / 2 + PI_CUARTO));

/**
 * Proyecta un punto de coordenadas a pixeles.
 */
export const escalaCoordenadas = (
  latitudMin: number,
  latitudMax: number,
  longitudMin: number,
  longitudMax: number
): IMapearCoordenadas => {
  const sur = aRadianes(latitudMin);
  const norte = aRadianes(latitudMax);
  const oriente = aRadianes(longitudMax);
  const occidente = aRadianes(longitudMin);
  const yMin = mercatorY(sur);
  const yMax = mercatorY(norte);

  // https://stackoverflow.com/questions/41557891/convert-lat-long-to-x-y-position-within-a-bounding-box
  /**
   * Proyección de un punto de coordenadas a pixeles
   *
   * @param punto Punto en formato [longitud, latitud]
   * @param ancho Ancho del mapa en pixeles
   * @param alto Alto del mapa en pixeles
   * @returns Coordenadas en {x, y}
   */
  return ([longitud, latitud]: Position, ancho: number, alto: number): Punto => {
    const latitudRad = aRadianes(latitud);
    const longitudRad = aRadianes(longitud);

    const escalaX = ancho / (oriente - occidente);
    const escalaY = alto / (yMax - yMin);

    const x = (longitudRad - occidente) * escalaX;
    const y = (yMax - mercatorY(latitudRad)) * escalaY;

    return { x, y };
  };
};
