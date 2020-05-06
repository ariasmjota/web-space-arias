import React from 'react';
import PropTypes from 'prop-types';

function Orbit(props) {

  
  return (
    <div>
      <p className="">Orbita</p>
      <input onInput={props.onInput} 
      type='range' min='0' step="0.0001" max='0.05'
      value={props.valueOrbit} />

    </div> 
  );
}


export default Orbit;