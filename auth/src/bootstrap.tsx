import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './sign/infrastructure/routers/App.router'


const Mount = (el: HTMLElement): void => {
  ReactDOM.render(
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>,
    el
  )
}

export { AppRouter, Mount }


 