export interface LlavesEP {
  menor14: number;
  entre15y18: number;
  entre19y35: number;
  entre36y50: number;
  mayor51: number;
}

export interface LlavesTP {
  pareja: number;
  familiar: number;
  amigo: number;
  otro: number;
}

export interface TEdadPerpetrador extends LlavesEP {
  n: number;
}

export interface TTipoPerpetrador extends LlavesTP {
  n: number;
}

export interface TEdadPerpetradorDatos extends TEdadPerpetrador {
  pais: string;
}

export interface TTipoPerpetradorDatos extends TTipoPerpetrador {
  pais: string;
}

export interface GrupoEP {
  totales: TEdadPerpetrador;
  datos: TEdadPerpetradorDatos[];
}

export interface GrupoTP {
  totales: TTipoPerpetrador;
  datos: TTipoPerpetradorDatos[];
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

export type Conexion = {
  pais: string;
  valor: number;
  origenY1: number;
  origenY2: number;
  destinoY1: number;
  destinoY2: number;
  color: string;
};

export interface GrupoConexion {
  llave: keyof LlavesEP | keyof LlavesTP;
  y: number;
  valor: number;
  conexiones: Conexion[];
  totalOrigen: number;
}
