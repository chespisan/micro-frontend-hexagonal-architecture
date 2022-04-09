import React, { FC, useState, useRef, FormEvent } from "react";

import { useApp } from "container/store";

import { SignUseCase } from '../../../application/use-case/sign.usecase'
import { SignService } from '../../services/sign.service'

import "./Sign.view.scss";

const SignView: FC = () => {
  const inputEmailRef = useRef(null)
  const inputPasswordRef = useRef(null)
  const [appData, setAppData] = useApp()

  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });

  const handleInputValue = (key: string): void => {
    const emailValue = inputEmailRef.current.value;
    const passwordValue = inputPasswordRef.current.value
    
    setFormValue({
      ...formValue,
      [key]: key === 'email' ? emailValue : passwordValue
    })
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if (formValue.email && formValue.password) {
      await SignUseCase.getInstance(SignService.getInstance()).signIn({email: formValue.email, password: formValue.password})
      setAppData({
        ...appData,
        authenticated: true,
        user: {
          email: formValue.email
        }
      })
    }
  };


  return (
    <div className="sign-view">
      <form className="sign-view__form" onSubmit={(e) => handleSubmit(e)}>
        <input
          ref={inputEmailRef}
          name="email"
          className="sign-view__input"
          type="text"
          placeholder="Ingrese su email"
          onChange={() => handleInputValue("email")}
          value={formValue.email}
        />
        <input
          ref={inputPasswordRef}
          name="password"
          className="sign-view__input"
          type="password"
          placeholder="Ingrese su password"
          onChange={() => handleInputValue("password")}
          value={formValue.password}
        />
        <button className="sign-view__button" type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export { SignView }