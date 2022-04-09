import Axios from 'axios'
import { ICharacters } from '../../domain/entities/home.entity'
import { HomeRepository } from '../../domain/repositories/home.repository'

const { REACT_APP_URI } = process.env

export class HomeService implements HomeRepository {
  private static _instance: HomeService
  private appiName: string

  constructor() {
    this.appiName = REACT_APP_URI
  }

  public static getInstance(): HomeService {
    if(!this._instance) this._instance = new this()
    return this._instance
  }

  async getCharacters(): Promise<ICharacters> {
    const { data } = await Axios.get(`${this.appiName}character`) 
    return data
  }
}