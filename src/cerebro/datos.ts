import type { DatosEdadPerpetrador } from '@/tipos';
/**
 * 
Country 	N 	Current or Former Romantic Partners 	Family member 	Friend, classmate, or neighbour 	Other 
Cambodia	45	11.6%	28.1%	12.1%	48.1%
Colombia	100	14.0%	9.0%	62.6%	14.4%
Cote d'Ivoire					
El Salvador					
Haiti	89	17.8%	78.1%	0.0%	4.1%
Honduras					
Kenya					
Lesotho					
Malawi					
Moldova					
Mozambique	27	27.8%	0.2%	66.9%	5.1%
Namibia					
Nigeria	140	19.7%	6.8%	68.6%	4.9%
Tanzania					
Zambia	43	32.5%	1.3%	61.5%	4.7%
Zimbabwe	6	0.0%	65.2%	0.0%	34.8%
__
Total 	450	17.6%	27.0%	38.8%	16.6%



 */
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
