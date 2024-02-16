import React from 'react';

function Economic() {

  return (
    <>
      <div className='flex-container'>
        <iframe
            src="https://ec.europa.eu/eurostat/cache/website/covid/index.html?topic=CV1"
            title="Impact of COVID-19 on the European Economy"
            width="1500px"
            height="800px"
            style={{ border: "none", backgroundColor: "#263043" }}
            frameBorder="0"

        ></iframe>

      </div>
    </>
  );
}

export default Economic;
