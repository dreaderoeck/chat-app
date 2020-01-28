import React from 'react';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Contact
        avatar="https://randomuser.me/api/portraits/women/50.jpg"
        name="Anita Sutton"
        online={true}
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/men/63.jpg"
        name="Jim George"
        online={false}
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/9.jpg"
        name="Andrea Ryan"
        online={true}
      />
    </div>
  );
}

export default App;
