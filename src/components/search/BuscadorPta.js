

export const BuscadorPta = async(pokemon) => {
  
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data, "buscador")
    return data;
  } catch (error) {
      console.log(error);
    }
};
