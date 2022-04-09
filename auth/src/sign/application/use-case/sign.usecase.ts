import { ISignIn, ISignUp } from "../../domain/entities/sign.entity";
import { ISignRepository } from "../../domain/repositories/sign.repository";

export class SignUseCase implements ISignRepository {
  private static _instance: SignUseCase
  
  constructor(private readonly signRepository: ISignRepository) {
    this.signRepository = signRepository
  }

  public static getInstance(signRepository: ISignRepository): SignUseCase {
    if (!this._instance) this._instance = new this(signRepository)
    return this._instance
  }

  signIn(data: ISignIn): Promise<ISignIn> {
    return this.signRepository.signIn(data)
  }

  signUp(data: ISignUp): Promise<ISignUp> {
    return this.signRepository.signUp(data)
  }
}