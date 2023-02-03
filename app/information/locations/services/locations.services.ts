import { ILocation } from '../models'

const API_URL = 'https://rickandmortyapi.com/api'
const ALL_LOCATIONS_URL = `${API_URL}/location`

export const getAllLocations = (): Promise<ILocation[]> => {
  return fetch(ALL_LOCATIONS_URL)
    .then(response => response.json())
    .then(data => data.results)
}
