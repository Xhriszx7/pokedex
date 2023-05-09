const fetchPokemon = (pokemon) => {
    
    const apiResponse = fetch(`https://pokeapi.co/api/v2/pokemon/$[pokemon]`);
    console.log(apiResponse)
    
}