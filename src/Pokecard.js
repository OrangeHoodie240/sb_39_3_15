import React from 'react'; 
import axios from 'axios';
import './Pokecard.css'

const Pokecard = ({name, id, type, exp})=>{
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <div className='pokecard'>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>Type: {type}</p>
            <p>Exp {exp}</p>
        </div>
    );
};



export default Pokecard;