import React from 'react';
import './input.css';

const Input = ({ getMeMessage, sendMessage, msg, chat  }) => {
    return (
      <form
       onSubmit= {(e) => sendMessage(e) }
       className='chatbot-chat-input-container'>
        <input
        //disabled={ chat.length >= 3 ? true : false }
        placeholder={ 'Escribi tu Nombre' }
        Type='text'
        value={msg.msg}
        onChange={ (e) => getMeMessage(e.target.value) }
        />
        <button
        type='submit'
        />
      </form>
    )
};

export default Input;