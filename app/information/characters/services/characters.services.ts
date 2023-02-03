import { ICharacter } from '../models'

const API_URL = 'https://rickandmortyapi.com/api'
const ALL_CHARACTERS_URL = `${API_URL}/character`

export const getAllCharacters = (): Promise<ICharacter[]> => {
  return fetch(ALL_CHARACTERS_URL)
    .then(response => response.json())
    .then(data => data.results)
}
