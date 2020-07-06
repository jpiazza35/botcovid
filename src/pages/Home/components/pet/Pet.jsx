import React from 'react';
import Lottie from 'react-lottie';
import './Pet.css';
import animationPet  from  './pet.json';


const Pet = ({  history }) => {


    const defaultOptions = {
          loop: true,
          autoplay: true,
          animationData: animationPet


    };

    function handleonClick() {
        history.push('/chat')
    }


    return (

        <div onClick={handleonClick} className='pet-container'>
          <Lottie 
           options={defaultOptions}/>
           
        </div>
    )
};

export default Pet;