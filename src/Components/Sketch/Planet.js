import * as React from 'react';
import PropTypes from 'prop-types';
import Name from '../../Components/Name/Name';
import { Typography, Button } from '@material-ui/core';


export const Planet = ({ name, id, size, color, onDelete }) => {
  
  return (<div>
    <p>{name}</p>
    <p>{id}</p>

    {onDelete && <Button onClick={onDelete}>
      Borrar
    </Button>}
  </div>);
}

Planet.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  onDelete: PropTypes.func,
}