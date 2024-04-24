export interface TEdadPerpetrador {
  pais: string;
  n: number;
  menor14: number;
  entre15y18: number;
  entre19y35: number;
  entre36y50: number;
  mayor51: number;
}

export interface GrupoSexo {
  mujeres?: TEdadPerpetrador[];
  hombres?: TEdadPerpetrador[];
}

export interface GrupoEdad {
  mayor18?: GrupoSexo;
  menor17?: GrupoSexo;
}

export interface Arbol {
  vida?: GrupoEdad;
  ultimos12?: GrupoEdad;
}

export interface ExtremosCoordenadas {
  latitudMin: number;
  latitudMax: number;
  longitudMin: number;
  longitudMax: number;
}
