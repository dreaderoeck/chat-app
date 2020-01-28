import React from 'react';
import './Contact.css';


function Contact(props) {
   return (
    <figure className="Contact">
      <img className = "nameAvatar" 
         src={props.image}
         alt={props.character}
      />
       
      
 
</figure>

     
    

   );
}



export default Contact;