import React from 'react'; 
import './Pokedex.css';
import Pokecard from "./Pokecard";



function Pokedex(){
    let pokemon = [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
      ];
      pokemon = pokemon.map(p=> <Pokecard name={p.name} type={p.type} id={'' + p.id} key={p.id + ''} exp={'' + p.base_experience} />);
    return (
        <>
            <h1 className='pokedex-header'>Pokedex</h1>
            <div className='pokedex'>
                {pokemon}
            </div>
        </>
    );
}



export default Pokedex; 