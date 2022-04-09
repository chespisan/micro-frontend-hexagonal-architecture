import React, { createContext, useContext, useState } from 'react'


const initialState = {
  authenticated: false,
  user: {}
}

const appContext = createContext<any>([initialState, () => {}])

const AppProvider = ({children}) => {
  return (
    <appContext.Provider value={useState(initialState)} >
      {children}
    </appContext.Provider>
  )
}

const useApp = () => {
  return useContext(appContext)
}

export { AppProvider, useApp }