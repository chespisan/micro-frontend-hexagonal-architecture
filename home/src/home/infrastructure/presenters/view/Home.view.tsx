import React, { FC, useEffect, useState } from 'react'
import { HomeUseCase } from '../../../application/use-cases/home.usecase'
import { ICharacters, IResults } from '../../../domain/entities/home.entity'
import { HomeService } from '../../services/home.service'
import { ButtonComponent } from '../components/button/Button.component'
import { CharacterComponent } from '../components/character/Character.component'

import { useApp } from "container/store";

import './Home.view.scss'

export const HomeView: FC = () => {
  const [listCharacters, setListCharacters] = useState<ICharacters>()
  const [appData, setAppData] = useApp()


  const handleGetCharacters = async (): Promise<void> => {
    try {
      const listCharacters: ICharacters = await HomeUseCase.getInstance(HomeService.getInstance()).getCharacters()
      setListCharacters(listCharacters)
    } catch (error) {
      console.log('Error: ', error);
    }
  }


  const handleLogout = (): void => {
    localStorage.removeItem('user')
    setAppData({
      ...appData,
      authenticated: false,
      user: {}
    })
  }

  useEffect(() => {
    handleGetCharacters()
  }, [])

  return (
    <div className='home-container'>
      <header className='home-container__header'>
        <h1 className='home-container__title'>Lista de personajes</h1>
        <ButtonComponent click={handleLogout} text='Cerrar sesion' />
      </header>
      <div className='home-container__content'>
        { listCharacters?.results.map((item: IResults) => (
          <CharacterComponent key={item.id} {...item} />
          ))
        }
      </div>
    </div>
  )
}
