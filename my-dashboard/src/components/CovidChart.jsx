// import React, { useEffect, useState } from 'react';
// import { BarChart } from 'react-d3-graphs';
// import * as d3 from 'd3';
// import covidData from '../files/owid-covid-latest.csv';

// function CovidChart() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(covidData); 
//         const csvData = await response.text();
//         const parsedData = d3.csvParse(csvData);
//         setData(parsedData);
//       } catch (error) {
//         console.error('Erreur lors du chargement des données CSV :', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Graphique des nouveaux cas de COVID-19</h1>
//       {data.length > 0 && (
//         <BarChart
//           data={data.map((d) => ({
//             x: d.last_updated_date, 
//             y: +d.new_cases, 
//           }))}
//           width={800}
//           height={400}
//           margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
//           xAxis={{ label: 'Date' }}
//           yAxis={{ label: 'Nouveaux cas' }}
//         />
//       )}
//     </div>
//   );
// }

// export default CovidChart;
