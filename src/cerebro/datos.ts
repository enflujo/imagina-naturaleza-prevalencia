// Country 	      N 	  <14 	  15-18   19-35   36-50   >51
// Colombia 	      338	  14.2%	  25.8%	  39.9%	  16.1%	  4.0%
// Côte d'Ivoire 	388	  87.0%	  7.0%	  5.8%	  0.2%	  0.0%
// El Salvador 	  142	  10.3%	  35.8%	  38.7%	  9.6%	  5.6%
// Haiti
// Honduras 	      601	  11.4%	  34.9%	  42.3%	  9.6%	  1.7%
// Kenya 	        274	  26.1%	  35.5%	  37.7%	  0.2%	  0.5%
// Lesotho 	      849	  21.2%	  36.8%	  38.9%	  2.2%	  0.9%
// Malawi
// Moldova 	      177	  10.1%	  49.6%	  38.0%	  1.9%	  0.4%
// Mozambique 	    265	  16.1%	  48.2%	  33.5%	  2.2%	  0.0%
// Namibia 	      653	  93.6%	  2.9%	  2.1%	  0.1%	  1.4%
// Nigeria
// Eswatini
// Tanzania
// Zambia
// Zimbabwe
// Total 	        3687 	32.2%	  30.7%	  30.8%	  4.7%	  1.6%

import type { Arbol } from '@/tipos';

// Country 	      N 	  <14 	  15-18 	19-35 	36-50 	>51
// Cambodia
// Colombia 	      352	  13.6%	  27.4%	  41.1%	  14.9%	  3.0%
// Cote d'Ivoire 	393	  89.3%	  5.5%	  5.0%	  0.2%	  0.0%
// El Salvador 	  141	  10.5%	  38.4%	  37.2%	  9.1%	  4.9%
// Haiti
// Honduras 	      602	  11.4%	  35.5%	  42.1%	  9.2%	  1.7%
// Kenya 	        249	  27.0%	  39.8%	  32.8%	  0.2%	  0.3%
// Lesotho 	      744	  20.1%	  39.2%	  37.7%	  2.1%	  0.8%
// Malawi
// Moldova 	      180	  10.1%	  52.3%	  36.3%	  0.9%	  0.4%
// Mozambique 	    248 	16.4%	  52.7%	  29.0%	  1.8%	  0.0%
// Namibia 	      553	  94.4%	  2.9%	  1.2%	  0.1%	  1.3%
// Nigeria
// Eswatini
// Tanzania
// Zambia
// Zimbabwe
// Total 	        3462 	32.5%	  32.7%	  29.1%	  4.3%	  1.4%

export const edadPerpetrador: Arbol = {
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
