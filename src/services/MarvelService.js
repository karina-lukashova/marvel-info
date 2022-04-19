import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
  const { loading, error, request, clearError } = useHttp();

  const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  const _apiKey = 'apikey=382124e5ebc2fff76b70b64ce0e6f545';

  const getAllCharacters = async (offset) => {
    const result = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
    return result.data.results.map(_transformCharacter);
  }

  const getOneCharacter = async (id) => {
    const result = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformCharacter(result.data.results[0]);
  }

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description ? char.description : 'Description not found',
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items.length > 0 ? char.comics.items.slice(0, 10) : 'There are no comics with this character'
    }
  }
  
  return { loading, error, getAllCharacters, getOneCharacter };
}

export default useMarvelService;