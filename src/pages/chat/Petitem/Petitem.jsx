import React from 'react';
import './Petitem.css';
import PetAvatar from '../../../assets/images/Pet.png'

const Petitem = ({ text }) => {
         
    return (
        <div className='pet-item-container'>
             <img src={PetAvatar} alt='pet-avatar' />

             <div className='pet-item-messages'>
             { text.map((t, index ) =>
                    <label key={index}> {t} </label>
                            
            )}
             </div>            
        </div>
    )

};

export default Petitem;