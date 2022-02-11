import React, { useState } from 'react';
import './estilos.css'
import { BuscadorPta } from '../search/BuscadorPta';


export const PrincipalScreen = () => {

    const [busqueda, setBusqueda] = useState("");
    const [pokemon, SetPokemon] = useState("");
    
    const handlePokemon = (e) => {
        e.preventDefault();
        setBusqueda(e.target.value);
        // console.log(e.target.value)
    }

    const BuscarPokemon = async () => {
        let data = await BuscadorPta(busqueda);
        SetPokemon(data);
        console.log(data);
        return data;
        }         

    return (
        <div>
            <form onSubmit={handlePokemon}>
                <input
                    className="form-control me-2"
                    type="text"
                    placeholder="Buscar"
                    name='Buscar'
                    value={busqueda}
                    onChange={handlePokemon}
                />

                <button
                    type='submit'
                    onClick={BuscarPokemon}
                >
                    Buscar
                </button>
            </form >

            <div className='container'>
                
                
                    { pokemon.sprites !== undefined ?
                        <img src={pokemon.sprites.front_default} alt={pokemon.name}
                        /> : <div>Imagen no encontrada</div>
                    }
                
                <div>Nombre: {pokemon.name}</div>
                <div>Peso: {pokemon.weight} gr</div>
                {/* {
                    pokemon.weight !== undefined ?
                    <div>Altura: {pokemon.weight} cm</div> : <div>info no encontrada</div>
                } */}
                {/* {
                    pokemon.types[0] !== undefined ? 
                        <div>Tipo: {pokemon.types[0].type.name}</div> : <div>tipo no encontrado</div>
                } */}
                {/* <div>Habilidades: {pokemon.abilities[0].ability.name}, {pokemon.abilities[1].ability.name} </div> */}
                
                {/* <div>Movimientos: {
                        <ul>
                            {
                                pokemon.moves.map((moves, i) => {
                                    return <li key={i}>{moves.move.name} </li>
                                })
                            }
                        </ul>
                }</div> */}
            </div>
        </div>
    )
}
