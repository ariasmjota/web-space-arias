import React from 'react';
import PropTypes from 'prop-types';

function Ring(props) {

  
  return (
    <div>
      <p className="">Anillos</p>
      <input onInput={props.onInput} 
      type='range' min='0' max='10'
      value={props.valueRing} />

    </div> 
  );
}


export default Ring;