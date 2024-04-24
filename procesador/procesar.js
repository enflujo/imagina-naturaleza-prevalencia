import paises from './custom.geo.json' assert { type: 'json' };
import { writeFileSync } from 'fs';

const guardarJSON = (json, nombre) => {
  writeFileSync(`./estaticos/${nombre}.json`, JSON.stringify(json));
};

const redondearDecimal = (num, minimo, maximo) => +(Math.round(+(num + 'e+2')) + 'e-2');

const listaPaises = [
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

const geojson = { type: 'FeatureCollection', features: [] };

paises.features.forEach((lugar) => {
  const encuestado = listaPaises.includes(lugar.properties.name_en);
  const datosPaisLimpio = {
    type: 'Feature',
    geometry: lugar.geometry,
    properties: { nombre: lugar.properties.name_en, encuestado },
  };

  geojson.features.push(datosPaisLimpio);
});

// listaPaises.forEach((pais) => {
//   const datosPais = paises.features.find((lugar) => lugar.properties.name_en === pais);

//   const datosPaisLimpio = {
//     type: 'Feature',
//     geometry: datosPais.geometry,
//     properties: { nombre: datosPais.properties.name_en },
//   };

//   if (datosPais) {
//     datosPaisLimpio.geometry = datosPais.geometry;
//     datosPaisLimpio.properties = { nombre: datosPais.properties.name_en }
//   }

//   geojson.features.push(datosPaisLimpio);
// });

guardarJSON(geojson, 'paisesVacs.geo');
console.log('FIN');
