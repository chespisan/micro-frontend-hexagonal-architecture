import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignView } from '../presenters/view/Sign.view'


const AppRouter: FC<any> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<SignView />} />
      </Routes>
    </BrowserRouter>
  )
}

export { AppRouter }
