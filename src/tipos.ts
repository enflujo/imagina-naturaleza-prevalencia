export interface TEdadPerpetrador {
  n: number;
  menor14: number;
  entre15y18: number;
  entre19y35: number;
  entre36y50: number;
  mayor51: number;
}

export interface TEdadPerpetradorDatos extends TEdadPerpetrador {
  pais: string;
}

export interface GrupoSexo {
  mujeres?: { totales: TEdadPerpetrador; datos: TEdadPerpetradorDatos[] };
  hombres?: { totales: TEdadPerpetrador; datos: TEdadPerpetradorDatos[] };
}

export interface GrupoEdad {
  mayor18?: GrupoSexo;
  menor17?: GrupoSexo;
}

export interface Arbol {
  nombres: { [llave: string]: string };
  vida?: GrupoEdad;
  ultimos12?: GrupoEdad;
}

export interface ExtremosCoordenadas {
  latitudMin: number;
  latitudMax: number;
  longitudMin: number;
  longitudMax: number;
}
