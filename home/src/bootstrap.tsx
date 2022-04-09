import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { HomeRouter } from './home/infrastructure/routers/Home.router'

const MountRouter = (el: HTMLElement): void => {
  ReactDOM.render(
    <BrowserRouter>
      <HomeRouter />
    </BrowserRouter>,
    el
  )
}

export { HomeRouter, MountRouter }