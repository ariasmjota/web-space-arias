import React from 'react';
import PropTypes from 'prop-types';
import { GithubPicker,HuePicker, SketchPicker } from 'react-color';
function Color(props) {

  
  return (
    <div>
      <p className="">Color</p>
      <HuePicker
      color={props.valueColor}
      onChange={props.onChange} />
    </div> 
  );
}


export default Color;