import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import {AppRouter, Mount} from 'auth/Auth'
import {HomeRouter, MountRouter} from 'home/Home'


import { AppProvider, useApp } from "container/store";

import "./index.scss";

export const App = () => {
  const [ appData, setAppData ] = useApp();
  const { authenticated, user } = appData


  const handleUpdateState = (): void => {
    const getData = localStorage.getItem('user')
    if (getData) {
      setAppData(JSON.parse(getData))
      window.location.pathname !== '/' ? window.location.href = '/' : ''
      return
    }
    window.location.pathname !== '/login' ? window.location.href = '/login' : '' 
  }
  
  useEffect(() => {
    handleUpdateState()
  }, [authenticated])

  return (
    <div className="bg-light-gray">
      <AppRouter />
      <HomeRouter />
    </div>
  );
};
ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("app")
);
