import './App.css'

import { Facts } from './components/Facts/Facts'
import { Header } from './components/Header/Header'

export const App = () => {
  return (
    <div className='App'>
      <Header />
      <Facts />
    </div>
  )
}
