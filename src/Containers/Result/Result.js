import React from 'react';
import { Link } from 'react-router-dom';
import SketchComponet from '../../Components/Sketch/SketchComponet';

function Result() {
  const [planetList, setPlanetList] = React.useState([]);

  React.useEffect(() => {
    var temp = localStorage.getItem("planetList");

    if (temp !== null) {
      setPlanetList(JSON.parse(temp));
    }
  }, []);

  const handleClick = () => {
    localStorage.clear();
    setPlanetList([]);
  }

  return (

    <div className="">
       <audio  src="./sound/sound3.mp3" autoPlay></audio>

      <article className="Banner__background">
        <img className="Banner__background" src="./images/bg.png" alt="" />
      </article>

      <section className="Game__Componets">
        <article className="Game__Componets-name">
          <p>Este es tu universo </p>
        </article>
      </section>


      <div className="">
        {planetList.map((planet) => <SketchComponet size={planet.size} color={planet.color} name={planet.name} ring={planet.ring} orbit={planet.orbit}/>)}
      </div>


      <section className="Game__bottom">
        <button className="btn__login" onClick={handleClick}>Eliminar todo</button>
        <Link className="" to={'/game'}> <button className="btn__login">Crear otro planeta</button></Link>
      </section>
    </div>
  );
}

export default Result;