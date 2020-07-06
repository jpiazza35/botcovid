import React from 'react';
import Pet from './components/pet/Pet.jsx';
import './Home.css';
import Slide from 'react-reveal/Slide';
import LightSpeed from 'react-reveal/LightSpeed';


const Home = ({ history }) => {
    return (
        <div className='home-petbot-container'>
            <div className='home-petbot-content'>
                <Pet history={history} />
            </div>
                <div className='home-petbot-greetings'>
                    <Slide left>
                        <h1>Hola Humano!</h1>
                    </Slide>
                    <LightSpeed left>
                        <label>¿Queres salir un rato de la cuarentena</label>
                        <label>y Charlamos un rato? </label>
                    </LightSpeed>
                </div>
        </div>
    )
};


export default Home;