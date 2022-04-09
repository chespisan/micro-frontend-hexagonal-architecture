interface IInfo {
  count: number
  next:  string
  pages: number
  prev?: string 
}

interface ILocation {
  name: string
  url: string
}

interface IOrigin {
  name: string
  url: string
}

export interface IResults {
  created: string
  episode:  string[]
  gender: string
  id: number
  image: string
  location: ILocation
  name: string
  origin: IOrigin
  species: string
  status: string
  type: string
  url: string
}

export interface ICharacters {
  info: IInfo
  results: IResults[]
}