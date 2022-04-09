import { ISignIn, ISignUp } from "../../domain/entities/sign.entity";
import { ISignRepository } from "../../domain/repositories/sign.repository";

export class SignService implements ISignRepository {
  private static _instance: SignService

  public static getInstance(): SignService {
    if (!this._instance) this._instance = new this()
    return this._instance
  }

  signIn(data: ISignIn): Promise<ISignIn> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        localStorage.setItem('user', JSON.stringify({authenticated: true, user: {email: data.email}}))
        resolve(data)
      }, 1000)
    })
  }

  signUp(data: ISignUp): Promise<ISignUp> {
    return new Promise((resolve, reject) => {
      localStorage.setItem('user', JSON.stringify({authenticated: true, user: {email: data.email}}))
      resolve(data)
    })
  }

}