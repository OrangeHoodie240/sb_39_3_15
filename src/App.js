import React from 'react'; 
import ReactDOM from 'react-dom';
import Pokedex from './Pokedex';
import './App.css'; 


const App = ()=>{
  return (
    <>
      <Pokedex />
    </>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));

export default App;


