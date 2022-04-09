import React from 'react'
import ReactDOM from 'react-dom'
import { AppRouter } from './sign/infrastructure/routers/App.router'


const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: auth</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
)
ReactDOM.render(<AppRouter />, document.getElementById('app'))
