import { convertirEscala } from '@enflujo/alquimia';

export const definirDims = (alto: number) => {
  const respuesta = {
    altoViz: alto,
    espacioEntre: 35,
    margenY: 30,
    margenCentro: 50,
    maxAlto: 0,
    alto: (valor: number) => convertirEscala(valor, 0, 100, 1, respuesta.maxAlto),
  };
  respuesta.maxAlto = alto - respuesta.margenY * 2 - respuesta.espacioEntre * 5;
  return respuesta;
};
