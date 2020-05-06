import React from 'react';
import PropTypes from 'prop-types';

function Name(props) {

    return (
        <div>
            <p className="">Nombre</p>
            <input className="component__Name" onChange={props.onChange}
            value={props.valueName} placeholder='Nombra a tu planeta'></input>
        </div>
    );
  
    
}


    
Name.propTypes = {
    valueName: PropTypes.string,
  }


export default Name;