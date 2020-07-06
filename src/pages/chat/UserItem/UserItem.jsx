import React from 'react';
import './UserItem.css';
import manAvatar from '../../../assets/images/manAvatar.png';



const UserItem = ({ text })=>{
    return(

        <div className='user-item-container'>
          <div className='user-item-messages'>
              <label> { text } </label>
          </div>
           <img src={manAvatar} alt='man-user-avatar' />
       
        </div>
    )

};

export default UserItem;