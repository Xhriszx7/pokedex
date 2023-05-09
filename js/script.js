const pokemonName = document.querySelector('.pokemon-name');
const pokemonNumber = document.querySelector('.pokemon-number');
const pokemonImg = document.querySelector('.pokedex-pokemon');

const form = document.querySelector('.form');
const input = document.querySelector('.pokemon-search');

const fetchPokemon = async (pokemon) => {
    
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
    
    const data = await APIResponse.json();
    
    return data;
    
}

const renderPokemon = async (pokemon) => {
    
    const data = await fetchPokemon(pokemon);
    
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    
    input.value = '';
    
}

form.addEventListener('submit', () => {
    
    event.preventDefault();
    renderPokemon(input.value);
});