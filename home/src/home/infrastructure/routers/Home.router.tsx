import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeView } from '../presenters/view/Home.view'


const HomeRouter: FC = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeView />} />
    </Routes>
  </BrowserRouter>
  )
}


export { HomeRouter }