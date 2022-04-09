import React from 'react'

import './Button.component.scss'

export const ButtonComponent = ({ click, text }) => {
  return (
    <button 
      className='button-component'
      onClick={click}
      >{ text }
    </button>
  )
}
