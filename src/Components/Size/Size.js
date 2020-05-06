import React from 'react';

function Size(props) {

  return (
    <div>
      <p className="">Tamaño</p>
      <input onInput={props.onInput} 
      type='range' min='10' max='50'
      value={props.valueSize} />
    </div>

  );
}

export default Size;