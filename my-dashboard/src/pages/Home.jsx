import React from 'react';
// import TotalDeaths from '../components/TotalDeaths';
// import GlobeVisualization from '../components/GlobeVisualization';
import deadcaseImage from '../files/deadcase.png';

function Home() {

  return (
    
    <main className='main-container'>
      {/* <TotalDeaths /> */}
      {/* <GlobeVisualization /> */}
      <iframe
        src="https://data-visualisation-feur25.streamlit.app/?embed=true"
        title="Streamlit Application"
        width="100%"
        height="600px"
        style={{ border: "none", backgroundColor: "#263043" }}
        frameBorder="0"
      ></iframe>
      <img src={deadcaseImage} width={1200} height={600} alt="deadcase" />
    </main>
  );
}

export default Home;
