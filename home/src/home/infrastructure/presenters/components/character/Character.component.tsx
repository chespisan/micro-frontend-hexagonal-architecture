import React, { FC } from 'react'
import { IResults } from '../../../../domain/entities/home.entity'

import './Character.component.scss'

export const CharacterComponent: FC<IResults> = ({ id, image, name, gender,species, status }: IResults ) => {
  return (
    <div key={id} className='character-component'>
      <img src={image} alt={name} className='character-component__img' />
      <p>Nombre: {name}</p>
      <p>Genero: {gender}</p>
      <p>Especie: {species}</p>
      <p>Estado: {status}</p>
    </div>
  )
}
