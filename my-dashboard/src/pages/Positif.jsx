import React from 'react';

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
    </main>
    </>
  );
}

export default Positif;
