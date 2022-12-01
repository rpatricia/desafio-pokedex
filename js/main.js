/*  Variáveis de global */

const pokemonList = document.getElementById("pokemonList");

/* Funcão de requisição para api */

pokeApi
  .getPokemons()
  .then((pokemons = []) => {
    const newHTML = pokemons.map(convertPokemonToLi).join(" ");
    pokemonList.innerHTML += newHTML;

    //map de forma normal
    // const newList = pokemons.map((pokemon) => {
    //   return convertPokemonToLi(pokemon);
    // });
    // const newHTML = newList.join("");
    // pokemonList.innerHTML += newHTML;

    // maneira fazendo o mesmo procedimento usando for:

    // pokeApi.getPokemons().then((pokemons) => {
    //     const listItems = []
    //     for (let i = 0; i < pokemons.length; i++) {
    //       const pokemon = pokemons[i];
    //       listItems.push(convertPokemonToLi(pokemon))

    //   }
    //   console.log(listItems)
    //   })
    //   .catch((error) => console.error(error));
  })
  .catch((error) => console.error(error));

/* Manipulação do HTML através do JS */

/* convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map(
    (typeSlot) => `<li class="type">${typeSlot.type.name}</li>`
  );
}  */

function convertPokemonToLi(pokemon) {
  return `
  <li class="pokemon ${pokemon.type}">
      <span class="number">#${pokemon.number}</span>
      <span class="name">${pokemon.name}</span>
      <div class="detail">
          <ol class="types">
              ${pokemon.types
                .map((type) => `<li class="type ${type}">${type}</li>`)
                .join("")}
          </ol>
          <img src="${pokemon.photo}"
               alt="${pokemon.name}">
      </div>
  </li>
`;
}
