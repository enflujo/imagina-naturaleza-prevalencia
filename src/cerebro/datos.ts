import type { DatosEdadPerpetrador } from '@/tipos';
/**
 * 


 */

const tasaPrevalencia = {
  nombres: {
    vida: 'Lifetime',
    ultimoAnio: 'Last year',
  },
  entre13y17: {
    mujeres: {
      totales: { vida: 0, ultimoAnio: 0 },
      datos: [
        { pais: 'Cambodia', vida: 0.5, ultimoAnio: 3.6 },
        { pais: 'Colombia', vida: 15.7, ultimoAnio: 8.1 },
        { pais: "Côte d'Ivoire", vida: 14.5, ultimoAnio: 8.6 },
        { pais: 'El Salvador', vida: 8.5, ultimoAnio: 6.6 },
        { pais: 'Haiti', vida: 1.8, ultimoAnio: 10.3 },
        { pais: 'Honduras', vida: 13.3, ultimoAnio: 6.5 },
        { pais: 'Kenya', vida: 18.9, ultimoAnio: 13.5 },
        { pais: 'Lesotho', vida: 11.1, ultimoAnio: 7.9 },
        { pais: 'Malawi', vida: 28.7, ultimoAnio: 25.8 },
        { pais: 'Moldova', vida: 11.7, ultimoAnio: 7.5 },
        { pais: 'Mozambique', vida: 17.0, ultimoAnio: 11.7 },
        { pais: 'Namibia', vida: 7.5, ultimoAnio: 6.4 },
        { pais: 'Nigeria', vida: 26.2, ultimoAnio: 16.8 },
        { pais: 'Eswatini', vida: 29.7, ultimoAnio: 17.8 },
        { pais: 'Tanzania', vida: 26.3, ultimoAnio: 16.6 },
        { pais: 'Zambia', vida: 27.2, ultimoAnio: 19.0 },
        { pais: 'Zimbabwe', vida: 3.1, ultimoAnio: 2.6 },
      ],
    },
    hombres: {
      totales: { vida: 0, ultimoAnio: 0 },
      datos: [
        { pais: 'Cambodia', vida: 0.0, ultimoAnio: 0.3 },
        { pais: 'Colombia', vida: 9.3, ultimoAnio: 4.8 },
        { pais: "Côte d'Ivoire", vida: 8.6, ultimoAnio: 3.7 },
        { pais: 'El Salvador', vida: 4.1, ultimoAnio: 2.8 },
        { pais: 'Haiti', vida: 2.6, ultimoAnio: 6.0 },
        { pais: 'Honduras', vida: 7.3, ultimoAnio: 5.1 },
        { pais: 'Kenya', vida: 7.7, ultimoAnio: 2.4 },
        { pais: 'Lesotho', vida: 4.7, ultimoAnio: 3.5 },
        { pais: 'Malawi', vida: 14.0, ultimoAnio: 12.9 },
        { pais: 'Moldova', vida: 5.3, ultimoAnio: 5.4 },
        { pais: 'Mozambique', vida: 8.9, ultimoAnio: 5.9 },
        { pais: 'Namibia', vida: 6.7, ultimoAnio: 3.0 },
        { pais: 'Nigeria', vida: 12.9, ultimoAnio: 8.7 },
        { pais: 'Eswatini', vida: 0.0, ultimoAnio: 0.0 },
        { pais: 'Tanzania', vida: 14.5, ultimoAnio: 6.7 },
        { pais: 'Zambia', vida: 10.1, ultimoAnio: 5.5 },
        { pais: 'Zimbabwe', vida: 0.1, ultimoAnio: 0.1 },
      ],
    },
  },
  entre18y24: {
    mujeres: {
      totales: { vida: 0, ultimoAnio: 0 },
      datos: [
        { pais: 'Cambodia', vida: 0.4, ultimoAnio: 3.6 },
        { pais: 'Colombia', vida: 18.0, ultimoAnio: 10.8 },
        { pais: "Côte d'Ivoire", vida: 19.5, ultimoAnio: 15.4 },
        { pais: 'El Salvador', vida: 13.8, ultimoAnio: 5.6 },
        { pais: 'Haiti', vida: 3.1, ultimoAnio: 20.4 },
        { pais: 'Honduras', vida: 16.5, ultimoAnio: 7.1 },
        { pais: 'Kenya', vida: 16.2, ultimoAnio: 14.7 },
        { pais: 'Lesotho', vida: 20.8, ultimoAnio: 16.5 },
        { pais: 'Malawi', vida: 22.6, ultimoAnio: 15.0 },
        { pais: 'Moldova', vida: 14.3, ultimoAnio: 8.4 },
        { pais: 'Mozambique', vida: 14.3, ultimoAnio: 10.6 },
        { pais: 'Namibia', vida: 10.6, ultimoAnio: 9.3 },
        { pais: 'Nigeria', vida: 25.0, ultimoAnio: 15.3 },
        { pais: 'Eswatini', vida: 37.4, ultimoAnio: 23.9 },
        { pais: 'Tanzania', vida: 25.2, ultimoAnio: 14.8 },
        { pais: 'Zambia', vida: 20.3, ultimoAnio: 12.5 },
        { pais: 'Zimbabwe', vida: 3.3, ultimoAnio: 4.5 },
      ],
    },
    hombres: {
      totales: { vida: 0, ultimoAnio: 0 },
      datos: [
        { pais: 'Cambodia', vida: 0.0, ultimoAnio: 1.0 },
        { pais: 'Colombia', vida: 8.6, ultimoAnio: 7.5 },
        { pais: "Côte d'Ivoire", vida: 15.9, ultimoAnio: 13.2 },
        { pais: 'El Salvador', vida: 2.7, ultimoAnio: 2.0 },
        { pais: 'Haiti', vida: 5.1, ultimoAnio: 15.4 },
        { pais: 'Honduras', vida: 10.7, ultimoAnio: 9.1 },
        { pais: 'Kenya', vida: 6.4, ultimoAnio: 8.2 },
        { pais: 'Lesotho', vida: 14.4, ultimoAnio: 15.3 },
        { pais: 'Malawi', vida: 15.6, ultimoAnio: 12.3 },
        { pais: 'Moldova', vida: 5.3, ultimoAnio: 8.2 },
        { pais: 'Mozambique', vida: 8.5, ultimoAnio: 8.8 },
        { pais: 'Namibia', vida: 8.3, ultimoAnio: 6.4 },
        { pais: 'Nigeria', vida: 11.0, ultimoAnio: 12.0 },
        { pais: 'Eswatini', vida: 0.0, ultimoAnio: 0.0 },
        { pais: 'Tanzania', vida: 11.4, ultimoAnio: 13.5 },
        { pais: 'Zambia', vida: 10.3, ultimoAnio: 13.1 },
        { pais: 'Zimbabwe', vida: 0.9, ultimoAnio: 0.2 },
      ],
    },
  },
};

const sumaA = tasaPrevalencia.entre13y17.mujeres.datos.reduce((suma, dato) => suma + dato.vida, 0);
tasaPrevalencia.entre13y17.mujeres.totales.vida = sumaA / tasaPrevalencia.entre13y17.mujeres.datos.length;
tasaPrevalencia.entre13y17.mujeres.totales.ultimoAnio = tasaPrevalencia.entre13y17.mujeres.datos.reduce(
  (suma, dato) => suma + dato.ultimoAnio,
  0
);
const meanVida =
  tasaPrevalencia.entre13y17.mujeres.datos.reduce((suma, dato) => suma + dato.vida, 0) /
  tasaPrevalencia.entre13y17.mujeres.datos.length;
const meanUltimoAnio =
  tasaPrevalencia.entre13y17.mujeres.datos.reduce((suma, dato) => suma + dato.ultimoAnio, 0) /
  tasaPrevalencia.entre13y17.mujeres.datos.length;
const variance =
  tasaPrevalencia.entre13y17.mujeres.datos.reduce((suma, dato) => suma + Math.pow(dato.vida - meanVida, 2), 0) /
  tasaPrevalencia.entre13y17.mujeres.datos.length;

const standardDeviation = Math.sqrt(variance);

console.log('Standard Deviation:', standardDeviation);
console.log('Mean Vida:', meanVida);
console.log('Mean Último Año:', meanUltimoAnio);
const vidaMenoresMujeresOrdenado = tasaPrevalencia.entre13y17.mujeres.datos
  .map((dato) => dato.vida)
  .sort((a, b) => a - b);
const centro = Math.floor(vidaMenoresMujeresOrdenado.length / 2);
const median =
  vidaMenoresMujeresOrdenado.length % 2 !== 0
    ? vidaMenoresMujeresOrdenado[centro]
    : (vidaMenoresMujeresOrdenado[centro - 1] + vidaMenoresMujeresOrdenado[centro]) / 2;

console.log(tasaPrevalencia.entre13y17.mujeres.totales, median);

export { tasaPrevalencia };

export const lugarViolencia = {
  nombres: {
    n: 'Número de personas encuestadas',
    casa: 'Home',
    fuera: 'Outdoor',
    otro: 'Other public venue/spaces',
  },
  vida: {
    entre13y17: {
      mujeres: {
        totales: { n: 1012, casa: 69.3, fuera: 25.3, otro: 5.3 },
        datos: [
          { pais: 'Cambodia', n: 21, casa: 96.1, fuera: 3.9, otro: 0.0 },
          { pais: 'Colombia', n: 98, casa: 69.4, fuera: 30.5, otro: 0.1 },
          { pais: 'Haiti', n: 98, casa: 64.7, fuera: 35.3, otro: 0.0 },
          { pais: 'Nigeria', n: 190, casa: 68.1, fuera: 31.3, otro: 0.6 },
          { pais: 'Eswatini', n: 171, casa: 57.2, fuera: 23.8, otro: 19.0 },
          { pais: 'Tanzania', n: 121, casa: 42.0, fuera: 41.9, otro: 16.1 },
          { pais: 'Zambia', n: 92, casa: 61.7, fuera: 35.3, otro: 3.0 },
          { pais: 'Zimbabwe', n: 221, casa: 95.2, fuera: 0.8, otro: 4.0 },
        ],
      },
      hombres: {
        totales: { n: 419, casa: 67.0, fuera: 31.4, otro: 1.6 },
        datos: [
          { pais: 'Cambodia', n: 17, casa: 100.0, fuera: 0.0, otro: 0.0 },
          { pais: 'Colombia', n: 50, casa: 51.9, fuera: 48.0, otro: 0.0 },
          { pais: 'Haiti', n: 84, casa: 59.9, fuera: 40.1, otro: 0.0 },
          { pais: 'Nigeria', n: 126, casa: 62.7, fuera: 37.3, otro: 0.0 },
          { pais: 'Tanzania', n: 98, casa: 44.3, fuera: 44.5, otro: 11.2 },
          { pais: 'Zambia', n: 41, casa: 50.0, fuera: 50.0, otro: 0.0 },
          { pais: 'Zimbabwe', n: 3, casa: 100.0, fuera: 0.0, otro: 0.0 },
        ],
      },
    },
    entre18y24: {
      mujeres: {
        totales: { n: 1926, casa: 76.3, fuera: 19.4, otro: 4.3 },
        datos: [
          { pais: 'Cambodia', n: 40, casa: 95.5, fuera: 4.5, otro: 0.0 },
          { pais: 'Colombia', n: 179, casa: 70.1, fuera: 22.8, otro: 7.1 },
          { pais: 'Haiti', n: 203, casa: 75.7, fuera: 23.9, otro: 0.4 },
          { pais: 'Nigeria', n: 244, casa: 74.7, fuera: 24.9, otro: 0.5 },
          { pais: 'Eswatini', n: 417, casa: 66.1, fuera: 18.7, otro: 15.3 },
          { pais: 'Tanzania', n: 138, casa: 61.5, fuera: 31.2, otro: 7.2 },
          { pais: 'Zambia', n: 104, casa: 69.6, fuera: 29.3, otro: 1.1 },
          { pais: 'Zimbabwe', n: 601, casa: 97.2, fuera: 0.2, otro: 2.6 },
        ],
      },
      hombres: {
        totales: { n: 577, casa: 77.8, fuera: 19.1, otro: 3.1 },
        datos: [
          { pais: 'Cambodia', n: 33, casa: 93.0, fuera: 7.0, otro: 0.0 },
          { pais: 'Colombia', n: 98, casa: 63.1, fuera: 28.2, otro: 8.7 },
          { pais: 'Haiti', n: 162, casa: 81.0, fuera: 19.0, otro: 0.0 },
          { pais: 'Nigeria', n: 140, casa: 71.8, fuera: 26.6, otro: 1.6 },
          { pais: 'Tanzania', n: 87, casa: 62.0, fuera: 27.5, otro: 10.5 },
          { pais: 'Zambia', n: 51, casa: 73.5, fuera: 25.3, otro: 1.2 },
          { pais: 'Zimbabwe', n: 6, casa: 100.0, fuera: 0.0, otro: 0.0 },
        ],
      },
    },
  },
};

export const edadVictimas = {
  nombres: {
    n: 'Número de personas encuestadas',
    menor14: '0 to 13',
    entre14y15: '14 to 15',
    entre16y17: '16 to 17',
  },
  vida: {
    entre13y17: {
      mujeres: {
        totales: { n: 2172, menor14: 47.4, entre14y15: 37.0, entre16y17: 15.6 },
        datos: [
          { pais: 'Cambodia', n: 31, menor14: 44.4, entre14y15: 23.7, entre16y17: 31.9 },
          { pais: 'Colombia', n: 81, menor14: 46.3, entre14y15: 48.4, entre16y17: 5.3 },
          { pais: "Côte d'Ivoire", n: 118, menor14: 38.2, entre14y15: 43.8, entre16y17: 18.1 },
          { pais: 'El Salvador', n: 37, menor14: 42.4, entre14y15: 28.2, entre16y17: 29.4 },
          { pais: 'Haiti', n: 99, menor14: 44.5, entre14y15: 44.1, entre16y17: 11.4 },
          { pais: 'Honduras', n: 157, menor14: 60.2, entre14y15: 29.0, entre16y17: 10.8 },
          { pais: 'Kenya', n: 115, menor14: 39.4, entre14y15: 43.8, entre16y17: 16.8 },
          { pais: 'Lesotho', n: 339, menor14: 32.7, entre14y15: 41.3, entre16y17: 26.0 },
          { pais: 'Malawi', n: 102, menor14: 62.6, entre14y15: 32.0, entre16y17: 5.4 },
          { pais: 'Moldova', n: 65, menor14: 38.0, entre14y15: 45.5, entre16y17: 16.5 },
          { pais: 'Mozambique', n: 128, menor14: 47.5, entre14y15: 38.3, entre16y17: 14.2 },
          { pais: 'Namibia', n: 222, menor14: 51.4, entre14y15: 33.6, entre16y17: 15.0 },
          { pais: 'Nigeria', n: 200, menor14: 54.1, entre14y15: 37.1, entre16y17: 8.8 },
          { pais: 'Eswatini', n: 171, menor14: 25.3, entre14y15: 43.4, entre16y17: 31.4 },
          { pais: 'Tanzania', n: 137, menor14: 39.4, entre14y15: 47.5, entre16y17: 13.1 },
          { pais: 'Zambia', n: 97, menor14: 39.4, entre14y15: 49.7, entre16y17: 10.9 },
          { pais: 'Zimbabwe', n: 73, menor14: 100.0, entre14y15: 0.0, entre16y17: 0.0 },
        ],
      },
      hombres: {
        totales: { n: 849, menor14: 49.7, entre14y15: 37.4, entre16y17: 13.0 },
        datos: [
          { pais: 'Cambodia', n: 29, menor14: 88.8, entre14y15: 9.9, entre16y17: 1.2 },
          { pais: 'Colombia', n: 31, menor14: 32.9, entre14y15: 61.3, entre16y17: 5.9 },
          { pais: "Côte d'Ivoire", n: 63, menor14: 43.7, entre14y15: 39.8, entre16y17: 16.6 },
          { pais: 'El Salvador', n: 25, menor14: 56.1, entre14y15: 33.5, entre16y17: 10.4 },
          { pais: 'Haiti', n: 91, menor14: 68.1, entre14y15: 25.4, entre16y17: 6.6 },
          { pais: 'Honduras', n: 102, menor14: 48.1, entre14y15: 40.2, entre16y17: 11.7 },
          { pais: 'Kenya', n: 29, menor14: 62.5, entre14y15: 33.2, entre16y17: 4.3 },
          { pais: 'Lesotho', n: 21, menor14: 37.9, entre14y15: 52.5, entre16y17: 9.6 },
          { pais: 'Malawi', n: 81, menor14: 69.1, entre14y15: 20.9, entre16y17: 10.0 },
          { pais: 'Moldova', n: 33, menor14: 12.9, entre14y15: 53.4, entre16y17: 33.7 },
          { pais: 'Mozambique', n: 34, menor14: 61.5, entre14y15: 28.8, entre16y17: 9.7 },
          { pais: 'Namibia', n: 35, menor14: 34.9, entre14y15: 55.2, entre16y17: 9.9 },
          { pais: 'Nigeria', n: 127, menor14: 44.2, entre14y15: 33.4, entre16y17: 22.5 },
          { pais: 'Tanzania', n: 102, menor14: 54.5, entre14y15: 32.8, entre16y17: 12.8 },
          { pais: 'Zambia', n: 44, menor14: 40.5, entre14y15: 49.5, entre16y17: 10.0 },
          { pais: 'Zimbabwe', n: 2, menor14: 100.0, entre14y15: 0.0, entre16y17: 0.0 },
        ],
      },
    },
    entre18y24: {
      mujeres: {
        totales: { n: 2815, menor14: 28.8, entre14y15: 28.5, entre16y17: 42.7 },
        datos: [
          { pais: 'Cambodia', n: 27, menor14: 26.2, entre14y15: 11.6, entre16y17: 62.2 },
          { pais: 'Colombia', n: 99, menor14: 37.2, entre14y15: 42.8, entre16y17: 20.0 },
          { pais: "Côte d'Ivoire", n: 124, menor14: 15.6, entre14y15: 38.9, entre16y17: 45.5 },
          { pais: 'El Salvador', n: 69, menor14: 35.4, entre14y15: 32.1, entre16y17: 32.4 },
          { pais: 'Haiti', n: 138, menor14: 24.8, entre14y15: 34.8, entre16y17: 40.4 },
          { pais: 'Honduras', n: 234, menor14: 54.9, entre14y15: 16.5, entre16y17: 28.6 },
          { pais: 'Kenya', n: 100, menor14: 18.4, entre14y15: 26.6, entre16y17: 54.9 },
          { pais: 'Lesotho', n: 479, menor14: 13.1, entre14y15: 26.7, entre16y17: 60.2 },
          { pais: 'Malawi', n: 116, menor14: 28.8, entre14y15: 35.7, entre16y17: 35.6 },
          { pais: 'Moldova', n: 59, menor14: 8.6, entre14y15: 21.7, entre16y17: 69.8 },
          { pais: 'Mozambique', n: 128, menor14: 20.2, entre14y15: 39.1, entre16y17: 40.7 },
          { pais: 'Namibia', n: 250, menor14: 21.9, entre14y15: 34.7, entre16y17: 43.4 },
          { pais: 'Nigeria', n: 250, menor14: 19.8, entre14y15: 31.8, entre16y17: 48.4 },
          { pais: 'Eswatini', n: 244, menor14: 17.0, entre14y15: 30.5, entre16y17: 52.5 },
          { pais: 'Tanzania', n: 164, menor14: 19.2, entre14y15: 39.6, entre16y17: 41.2 },
          { pais: 'Zambia', n: 110, menor14: 28.4, entre14y15: 20.9, entre16y17: 50.7 },
          { pais: 'Zimbabwe', n: 224, menor14: 100.0, entre14y15: 0.0, entre16y17: 0.0 },
        ],
      },
      hombres: {
        totales: { n: 930, menor14: 29.4, entre14y15: 20.6, entre16y17: 50.0 },
        datos: [
          { pais: 'Cambodia', n: 34, menor14: 72.3, entre14y15: 4.2, entre16y17: 23.4 },
          { pais: 'Colombia', n: 38, menor14: 37.7, entre14y15: 17.9, entre16y17: 44.3 },
          { pais: "Côte d'Ivoire", n: 68, menor14: 36.0, entre14y15: 19.3, entre16y17: 44.7 },
          { pais: 'El Salvador', n: 18, menor14: 13.1, entre14y15: 19.4, entre16y17: 67.6 },
          { pais: 'Haiti', n: 110, menor14: 27.7, entre14y15: 37.5, entre16y17: 34.8 },
          { pais: 'Honduras', n: 133, menor14: 30.0, entre14y15: 26.6, entre16y17: 43.5 },
          { pais: 'Kenya', n: 23, menor14: 9.3, entre14y15: 11.8, entre16y17: 78.9 },
          { pais: 'Lesotho', n: 29, menor14: 11.9, entre14y15: 36.5, entre16y17: 51.6 },
          { pais: 'Malawi', n: 78, menor14: 31.9, entre14y15: 23.0, entre16y17: 45.1 },
          { pais: 'Moldova', n: 25, menor14: 0.0, entre14y15: 31.2, entre16y17: 68.8 },
          { pais: 'Mozambique', n: 27, menor14: 9.7, entre14y15: 14.8, entre16y17: 75.5 },
          { pais: 'Namibia', n: 46, menor14: 14.7, entre14y15: 28.9, entre16y17: 56.4 },
          { pais: 'Nigeria', n: 147, menor14: 28.9, entre14y15: 16.1, entre16y17: 55.0 },
          { pais: 'Tanzania', n: 96, menor14: 14.7, entre14y15: 26.9, entre16y17: 58.4 },
          { pais: 'Zambia', n: 55, menor14: 32.5, entre14y15: 15.4, entre16y17: 52.1 },
          { pais: 'Zimbabwe', n: 3, menor14: 100.0, entre14y15: 0.0, entre16y17: 0.0 },
        ],
      },
    },
  },
};

export const tipoPerpetrador = {
  nombres: {
    n: 'Número de personas encuestadas',
    pareja: 'Current or Former Romantic Partners',
    familiar: 'Family member',
    amigo: 'Friend, classmate, or neighbour',
    otro: 'Other',
  },

  vida: {
    entre13y17: {
      mujeres: {
        totales: { n: 1002, pareja: 38.0, familiar: 12.1, amigo: 27.8, otro: 22.1 },
        datos: [
          { pais: 'Cambodia', n: 31, pareja: 21.6, familiar: 7.8, amigo: 6.2, otro: 64.4 },
          { pais: 'Colombia', n: 99, pareja: 15.5, familiar: 47.6, amigo: 15.7, otro: 21.3 },
          { pais: 'Haiti', n: 104, pareja: 79.9, familiar: 13.1, amigo: 0.0, otro: 7.0 },
          { pais: 'Mozambique', n: 127, pareja: 40.2, familiar: 1.6, amigo: 43.9, otro: 14.3 },
          { pais: 'Nigeria', n: 187, pareja: 31.2, familiar: 5.2, amigo: 52.5, otro: 11.0 },
          { pais: 'Eswatini', n: 163, pareja: 29.7, familiar: 14.6, amigo: 40.5, otro: 15.1 },
          { pais: 'Zambia', n: 80, pareja: 43.6, familiar: 4.4, amigo: 44.3, otro: 7.7 },
          { pais: 'Zimbabwe', n: 211, pareja: 42.0, familiar: 2.3, amigo: 19.6, otro: 36.1 },
        ],
      },
      hombres: {
        totales: { n: 293, pareja: 22.7, familiar: 12.5, amigo: 52.1, otro: 12.7 },
        datos: [
          { pais: 'Cambodia', n: 28, pareja: 0.0, familiar: 29.6, amigo: 22.0, otro: 48.5 },
          { pais: 'Colombia', n: 51, pareja: 14.6, familiar: 2.4, amigo: 73.3, otro: 9.7 },
          { pais: 'Haiti', n: 22, pareja: 63.9, familiar: 36.1, amigo: 0.0, otro: 0.0 },
          { pais: 'Mozambique', n: 34, pareja: 24.4, familiar: 0.0, amigo: 66.1, otro: 9.4 },
          { pais: 'Nigeria', n: 120, pareja: 19.0, familiar: 5.6, amigo: 70.4, otro: 5.0 },
          { pais: 'Zambia', n: 38, pareja: 14.1, familiar: 1.0, amigo: 81.2, otro: 3.7 },
        ],
      },
    },
    entre18y24: {
      mujeres: {
        totales: { n: 2015, pareja: 55.6, familiar: 6.0, amigo: 20.7, otro: 17.7 },
        datos: [
          { pais: 'Cambodia', n: 57, pareja: 37.2, familiar: 0.0, amigo: 9.8, otro: 53.0 },
          { pais: 'Colombia', n: 183, pareja: 40.0, familiar: 11.6, amigo: 27.1, otro: 21.4 },
          { pais: 'Haiti', n: 211, pareja: 75.8, familiar: 13.8, amigo: 0.2, otro: 10.2 },
          { pais: 'Mozambique', n: 126, pareja: 66.9, familiar: 0.1, amigo: 20.8, otro: 12.2 },
          { pais: 'Nigeria', n: 233, pareja: 45.2, familiar: 5.6, amigo: 38.4, otro: 10.7 },
          { pais: 'Eswatini', n: 408, pareja: 60.9, familiar: 10.1, amigo: 16.7, otro: 12.4 },
          { pais: 'Zambia', n: 95, pareja: 48.9, familiar: 3.7, amigo: 40.8, otro: 6.6 },
          { pais: 'Zimbabwe', n: 702, pareja: 70.1, familiar: 2.9, amigo: 12.0, otro: 15.0 },
        ],
      },
      hombres: {
        totales: { n: 450, pareja: 17.6, familiar: 27.0, amigo: 38.8, otro: 16.6 },
        datos: [
          { pais: 'Cambodia', n: 45, pareja: 11.6, familiar: 28.1, amigo: 12.1, otro: 48.1 },
          { pais: 'Colombia', n: 100, pareja: 14.0, familiar: 9.0, amigo: 62.6, otro: 14.4 },
          { pais: 'Haiti', n: 89, pareja: 17.8, familiar: 78.1, amigo: 0.0, otro: 4.1 },
          { pais: 'Mozambique', n: 27, pareja: 27.8, familiar: 0.2, amigo: 66.9, otro: 5.1 },
          { pais: 'Nigeria', n: 140, pareja: 19.7, familiar: 6.8, amigo: 68.6, otro: 4.9 },
          { pais: 'Zambia', n: 43, pareja: 32.5, familiar: 1.3, amigo: 61.5, otro: 4.7 },
          { pais: 'Zimbabwe', n: 6, pareja: 0.0, familiar: 65.2, amigo: 0.0, otro: 34.8 },
        ],
      },
    },
  },
};

export const edadPerpetrador: DatosEdadPerpetrador = {
  nombres: {
    n: 'Número de personas encuestadas',
    menor14: '14 or less',
    entre15y18: '15 to 18',
    entre19y35: '19 to 35',
    entre36y50: '36 to 50',
    mayor51: '51 or older',
  },

  vida: {
    mayor18: {
      mujeres: {
        totales: { n: 3687, menor14: 32.2, entre15y18: 30.7, entre19y35: 30.8, entre36y50: 4.7, mayor51: 1.6 },
        datos: [
          {
            pais: 'Colombia',
            n: 388,
            menor14: 14.2,
            entre15y18: 25.8,
            entre19y35: 39.9,
            entre36y50: 16.1,
            mayor51: 4.0,
          },
          {
            pais: "Côte d'Ivoire",
            n: 388,
            menor14: 87.0,
            entre15y18: 7.0,
            entre19y35: 5.8,
            entre36y50: 0.2,
            mayor51: 0.0,
          },
          {
            pais: 'El Salvador',
            n: 142,
            menor14: 10.3,
            entre15y18: 35.8,
            entre19y35: 38.7,
            entre36y50: 9.6,
            mayor51: 5.6,
          },
          {
            pais: 'Honduras',
            n: 601,
            menor14: 11.4,
            entre15y18: 34.9,
            entre19y35: 42.3,
            entre36y50: 9.6,
            mayor51: 1.7,
          },
          { pais: 'Kenya', n: 274, menor14: 26.1, entre15y18: 35.5, entre19y35: 37.7, entre36y50: 0.2, mayor51: 0.5 },
          { pais: 'Lesotho', n: 849, menor14: 21.2, entre15y18: 36.8, entre19y35: 38.9, entre36y50: 2.2, mayor51: 0.9 },
          { pais: 'Moldova', n: 177, menor14: 10.1, entre15y18: 49.6, entre19y35: 38.0, entre36y50: 1.9, mayor51: 0.4 },
          {
            pais: 'Mozambique',
            n: 265,
            menor14: 16.1,
            entre15y18: 48.2,
            entre19y35: 33.5,
            entre36y50: 2.2,
            mayor51: 0.0,
          },
          { pais: 'Namibia', n: 653, menor14: 93.6, entre15y18: 2.9, entre19y35: 2.1, entre36y50: 0.1, mayor51: 1.4 },
        ],
      },
      hombres: {
        totales: { n: 3462, menor14: 32.5, entre15y18: 32.7, entre19y35: 29.1, entre36y50: 4.3, mayor51: 1.4 },
        datos: [
          {
            pais: 'Colombia',
            n: 352,
            menor14: 13.6,
            entre15y18: 27.4,
            entre19y35: 41.1,
            entre36y50: 14.9,
            mayor51: 3.0,
          },
          {
            pais: "Côte d'Ivoire",
            n: 393,
            menor14: 89.3,
            entre15y18: 5.5,
            entre19y35: 5.0,
            entre36y50: 0.2,
            mayor51: 0.0,
          },
          {
            pais: 'El Salvador',
            n: 141,
            menor14: 10.5,
            entre15y18: 38.4,
            entre19y35: 37.2,
            entre36y50: 9.1,
            mayor51: 4.9,
          },
          {
            pais: 'Honduras',
            n: 602,
            menor14: 11.4,
            entre15y18: 35.5,
            entre19y35: 42.1,
            entre36y50: 9.2,
            mayor51: 1.7,
          },
          { pais: 'Kenya', n: 249, menor14: 27.0, entre15y18: 39.8, entre19y35: 32.8, entre36y50: 0.2, mayor51: 0.3 },
          { pais: 'Lesotho', n: 744, menor14: 20.1, entre15y18: 39.2, entre19y35: 37.7, entre36y50: 2.1, mayor51: 0.8 },
          { pais: 'Moldova', n: 180, menor14: 10.1, entre15y18: 52.3, entre19y35: 36.3, entre36y50: 0.9, mayor51: 0.4 },
          {
            pais: 'Mozambique',
            n: 248,
            menor14: 16.4,
            entre15y18: 52.7,
            entre19y35: 29.0,
            entre36y50: 1.8,
            mayor51: 0.0,
          },
          { pais: 'Namibia', n: 553, menor14: 94.4, entre15y18: 2.9, entre19y35: 1.2, entre36y50: 0.1, mayor51: 1.3 },
        ],
      },
    },
  },
};

export const listaPaises = [
  'Cambodia',
  'Colombia',
  'Ivory Coast',
  'El Salvador',
  'Haiti',
  'Honduras',
  'Kenya',
  'Lesotho',
  'Malawi',
  'Moldova',
  'Mozambique',
  'Namibia',
  'Nigeria',
  'Eswatini',
  'Tanzania',
  'Zambia',
  'Zimbabwe',
];
