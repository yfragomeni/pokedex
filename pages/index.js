import React from 'react';

export async function getStaticProps(context) {
    const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
        .then((serverResponse) => {
            if (serverResponse.ok) {
                return serverResponse.json();
            }
        })
        .then((objectResponse) => {
            return objectResponse.pokemon_entries;
        })
    return {
        props: {
            pokemons,
        },
    }
}

export default function Home(props) {
    const { pokemons } = props;
    console.log(pokemons)

    return ( 
        <div>
            <h2>Kanto Region Pokémon</h2>
            <ul>
            {pokemons.map((pokemon) => (
                <li key={pokemon.entry_number}>
                    <a>
                        {pokemon.pokemon_species.name}
                    </a>
                </li>
        ))}
            </ul>
        </div>
    )
}