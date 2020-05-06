import React from 'react';
import createSketch from './Sketch';
import PropTypes from 'prop-types';

const SketchComponet = (props) => {
  
  // elemento div que tiene el canvas adentro
  const elem = React.useRef(null);
  // aplicación de processing
  const sketch = React.useRef();
  
  // esto solo se debe ejecutar al inicio, una vez
  React.useEffect(() => {
    // instanciamos la app de processing
    sketch.current = createSketch(elem.current);
  }, []);

  // esto se debe ejecutar siempre que las propiedades cambien
  React.useEffect(() => {
    // usamos la misma app de processing para actualizar un valor
    sketch.current.setTam(props.size);
    sketch.current.setCol(props.color);
    sketch.current.setAros(props.ring);
    sketch.current.setOrbit(props.orbit);
  }, [ props.size, props.color, props.ring, props.orbit]);

  return <div ref={elem}>
    <p className="Name__Planet">{props.name}</p>
  </div>;
}

SketchComponet.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  ring:PropTypes.number,
  orbit:PropTypes.string,
}

export default SketchComponet;