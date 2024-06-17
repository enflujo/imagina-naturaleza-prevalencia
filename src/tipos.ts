export interface TEdadPerpetrador {
  n: number;
  menor14: number;
  entre15y18: number;
  entre19y35: number;
  entre36y50: number;
  mayor51: number;
}

export type LlavesEP = keyof TEdadPerpetrador;

export interface TEdadPerpetradorDatos extends TEdadPerpetrador {
  pais: string;
}

export interface GrupoSexoEP {
  mujeres: { totales: TEdadPerpetrador; datos: TEdadPerpetradorDatos[] };
  hombres: { totales: TEdadPerpetrador; datos: TEdadPerpetradorDatos[] };
}

export interface GrupoEdad {}

export interface Arbol {
  nombres: { [llave: string]: string };
}

export interface ExtremosCoordenadas {
  latitudMin: number;
  latitudMax: number;
  longitudMin: number;
  longitudMax: number;
}

export interface DatosEdadPerpetrador extends Arbol {
  vida: {
    mayor18: GrupoSexoEP;
  };
}
