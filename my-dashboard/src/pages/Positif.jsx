import React from 'react';
import casecovidImage from '../files/casecovid.png';

function Positif() {

  return (
    <>
    <main className='main-container'>
      {/* <TotalDeaths /> */}
      {/* <GlobeVisualization /> */}
      <iframe
        src="https://data-visualisation-9kuiuj9ucjyy9fhnykhepx.streamlit.app/?embed=true"
        title="Streamlit Application"
        width="100%"
        height="600px"
        style={{ border: "none", backgroundColor: "#263043" }}
        frameBorder="0"
      ></iframe>
      <img src={casecovidImage} width={1200} height={600} alt="casecovid" />
    </main>
    </>
  );
}

export default Positif;
