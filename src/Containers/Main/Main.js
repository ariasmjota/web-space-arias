import React from 'react';
import Size from '../../Components/Size/Size';
import Color from '../../Components/Color/Color';
import { Link } from 'react-router-dom';
import Name from '../../Components/Name/Name';
import SketchComponet from '../../Components/Sketch/SketchComponet';
import Ring from '../../Components/Ring/Ring';
import Orbit from '../../Components/Orbit/Orbit';

const settings = {
    value: 0,
}

export const settingsContext = React.createContext(settings);

function Main() {
    const [planetList, setPlanetList] = React.useState([]);

    React.useEffect(() => {
        var temp = localStorage.getItem("planetList");

        if (temp !== null) {
            setPlanetList(JSON.parse(temp));
        }
    }, []);

    const [valSize, setSize] = React.useState(50);
    const handleSize = (event) => {
        setSize(parseInt(event.target.value));
        console.log(event.target.value);
    }

    const [valName, setValName] = React.useState('');
    const handleName = (event) => {
        setValName(event.target.value);

    }

    const [valColor, setColor] = React.useState('#555555');
    const handleColor = (valColor) => {
        setColor(valColor.hex);
    }

    const [valRing, setRing] = React.useState(0);
    const handleRing = (event) => {
        setRing(parseInt(event.target.value));
    }
    const [valOrbit, setOrbit] = React.useState(0);
    const handleOrbit = (event) => {
        setOrbit(event.target.value);
    }


    const handleSave = (event) => {
        var object = {
            name: valName,
            size: valSize,
            color: valColor,
            ring: valRing,
            orbit: valOrbit,
        }

        planetList.push(object);
        console.log(object);
        alert("Tu planeta" + " " + object.name +" " + "Se ha guardado en tu universo" )
        localStorage.setItem("planetList", JSON.stringify(planetList));

    }

    return (
        <div className="Game">
          <audio  src="./sound/sound2.mp3" autoPlay></audio>
            <article className="Banner__background">
                <img className="Banner__background" src="./images/bg.png" alt="" />
            </article>

            <section className="Game__Componets">
                <article className="Game__Componets-name">
                    <p>Crea tu propio planeta </p>
                </article>

                <section className="Game__Componets--view">
                    <SketchComponet size={valSize} color={valColor} name={valName} ring={valRing} orbit={valOrbit}/>
                </section>

                <section className="Game__Componets--inputs">
                    <article className="Game__Componets--inputs-ONE">

                        <Name onChange={handleName} valueName={valName} />

                    </article>

                    <article className="Game__Componets--inputs-TWO" >

                        <Size onInput={handleSize} valueSize={valSize} />

                    </article>

                    <article className="Game__Componets--inputs-TREE" >

                        <Color onChange={handleColor} valueColor={valColor} />

                    </article>

                    <article className="Game__Componets--inputs-FOUR">

                        <Ring onInput={handleRing} valueRing={valRing} />

                    </article>
                    <article className="Game__Componets--inputs-FIVE">

                        <Orbit onInput={handleOrbit} valueOrbit={valOrbit} />

                    </article>


                </section>

                <section className="Game__bottom">
                    <button className="btn__login" onClick={handleSave}>Guardar tu planeta</button>
                    <Link className="" to={'/gallery'}> <button className="btn__login">Vuela en tu universo</button></Link>
                </section>
            </section>




        </div>

    );
}

export default Main;