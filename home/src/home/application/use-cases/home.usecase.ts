import { ICharacters } from "../../domain/entities/home.entity";
import { HomeRepository } from "../../domain/repositories/home.repository";

export class HomeUseCase implements HomeRepository{
  private static _instance: HomeUseCase
  
  constructor(private readonly homeRepository: HomeRepository) {
    this.homeRepository = homeRepository
  }

  public static getInstance(homeRepository: HomeRepository): HomeUseCase {
    if (!this._instance) this._instance = new this(homeRepository)
    return this._instance
  }

  getCharacters(): Promise<ICharacters> {
    return this.homeRepository.getCharacters()  
  }

}