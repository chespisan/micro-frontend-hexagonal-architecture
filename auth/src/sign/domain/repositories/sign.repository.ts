import { ISignIn, ISignUp } from "../entities/sign.entity";

export interface ISignRepository {
  signIn(data: ISignIn): Promise<ISignIn>
  signUp(data: ISignUp): Promise<ISignUp>
}