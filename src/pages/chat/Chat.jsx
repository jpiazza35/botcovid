import React, { useState, useEffect, useRef} from 'react';  //useState is a hook
import './Chat.css';
import Petitem from './Petitem/Petitem';
import UserItem from './UserItem/UserItem';
import Input from './input/input';
import Select from './Select/Select';
import { AboutRame, AboutMarron, AboutFari, AboutTebi } from '../../data/Actions';
import Fade from 'react-reveal/Fade'

const Chat = () => {
   

    let idCounter = 0;
    const [ msg, setMsg ] = useState({});
    const [ openSelect, setOpenSelect ] = useState(false);
    const [ chat, setChat ] = useState([
        {

            id: 0,
            emitter: 'Pet',
            msg: ['Hola', '¿Como es tu Nombre?']

    }
]);

       
function firstResponse(name){
    
    let newChat = {
        id: idCounter + 2,
        emitter: 'Pet',
         msg: [
            '¡Mucho Gusto' + name + '!',
            'Mi Nombre es Covid-19, soy el Bot del momento',
            'Llegue para romperte los Huevos :) ',
            '¿Decime , queres saber algo?',
            'Selecciona algunas de las opciones',
        ]    
  
    }
    if(newChat){
        setChat([...chat, newChat])
    }
}

useEffect( () => {
    if(chat.length === 2){
        
        setTimeout( () => firstResponse(msg.msg), 500); //it will be the name that the user has put
        
        setMsg({ ...msg, msg: ''});
        setTimeout(() => setOpenSelect(true),600)
       
    }
}, [chat]);


function getMeMessage(value){
    idCounter = idCounter + 1;
    setMsg({

        id: idCounter,
        emitter: 'User',
        msg: value   

     })

  };

  function sendMessage(e){
      e.preventDefault();
      setChat([...chat, msg])
  };


 let options = [
   {
       id: "Talk me about Rame",
       text: "¿Que sabes del Oso albino Rame?"

   },
      
   {
    id: "Talk me about Martin",
    text: "¿Sabes algo del Oso Marron?"

},

{
    id: "Talk me about Teby",
    text: "¿Cierto que al viejo se lo quieren llevar al Exterior?"

},

{
    id: "Talk me about Farina",
    text: "¿Como lleva la cuarentena Fari?"

},
 ];

 const [ interactions, setInteractions] = useState([]);
 function handleSelectedOptions(value){
     
    let result;

     switch(value){
         case 'Talk me about Rame':
             result = AboutRame[Math.floor(Math.random() * AboutRame.length)]
             if(result){
                 setInteractions([ ...interactions, result.msg ])
             }
             break;

         case 'Talk me about Martin':
             result = AboutMarron[Math.floor(Math.random() * AboutMarron.length)]
             if(result){
                 setInteractions([ ...interactions, result.msg])
             }
             break;

        case 'Talk me about Teby':
             result = AboutTebi[Math.floor(Math.random() * AboutTebi.length)]
             if(result){
               setInteractions([ ...interactions, result.msg])
                }

             break;

       case 'Talk me about Farina':
             result = AboutFari[Math.floor(Math.random() * AboutFari.length)]
             if(result){
             setInteractions([ ...interactions, result.msg])
                } 
                
             break;
        
             default:
            console.log('No hay valores');
            
     }
 }
  
  




console.log('chat:', chat)
console.log('msg:', msg)





    return (
        <div className='chatbot-chat-container'>
           <div className='chatbot-chat-content'>
                <div className='chatbot-chat'>
                    <div className='chatbot-chat-container-body'>
                        {chat.map((message, index)=>
                        message.emitter === 'Pet' ? (
                    
                        <Petitem key={index} text={message.msg} />
                       
                    ):  (
                        
                        <UserItem key={index} text={message.msg}/>
                      
                    )
                        )}
                        {openSelect &&
                        <Fade right>
                            <Select
                            handleSelectedOptions={handleSelectedOptions}
                            options={options} />
                        </Fade>
                         }
                     {interactions.length > 0 && interactions.map((interaction, index) =>
                      <>
                       <Fade left>
                           <Petitem key={index} text={interaction}> </Petitem>  
                       </Fade>
                       <Fade right>
                          <Select 
                           key={index}
                           handleSelectedOptions={handleSelectedOptions}
                           options={options}
                            />
                       </Fade>
                       </>
                      
                      )
                     }
                                     
                    </div>
                      <div className='chatbot-chat-container-input'>
                          <Input
                          chat={chat}
                          msg={msg}
                          getMeMessage={getMeMessage}
                          sendMessage={sendMessage}
                          />

                      </div>
                    
                </div>
            </div> 
        </div>
    )
};

export default Chat;