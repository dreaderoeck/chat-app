import React from 'react';
import Contact from './Contact';

//5 data users

const contacts = [
    {
        id: 0,
        avatar: "https://randomuser.me/api/portraits/women/64.jpg",
        name: "Ross Shaw",
        online: true
    },
    {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/men/92.jpg",
        name: "Howard Mason",
        online: false
    },
    {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/women/56.jpg",
        name: "Lorraine Craig",
        online: true
    },
    {   
        id: 3,
        avatar: "https://randomuser.me/api/portraits/men/23.jpg",
        name: "Andre Nelson",
        online: true
    },
      {
        id: 4,  
        avatar: "https://randomuser.me/api/portraits/men/15.jpg",
        name: "Lonnie Hunter",
        online: false
    }
];


const ContactList = () => (
    <React.Fragment>
      {contacts.map(item => (
        <Contact key={item.id} avatar={item.avatar} name={item.name} online={item.online} />
        ))}
    </React.Fragment>

  );


export default ContactList;
