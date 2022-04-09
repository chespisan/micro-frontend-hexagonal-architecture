import { ICharacters } from "../entities/home.entity";

export interface HomeRepository {
  getCharacters(): Promise<ICharacters>
}