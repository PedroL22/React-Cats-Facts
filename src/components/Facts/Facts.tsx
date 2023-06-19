import { useEffect, useState } from 'react'
import axios from 'axios'

import './styles.css'

type FactType = {
  fact: string
}

export const Facts = () => {
  const [randomFact, setRandomFact] = useState<FactType | null>(null)
  const [counter, setCounter] = useState(1)

  const switchFact = () => {
    setCounter(counter + 1)
  }

  const turnFact = () => {
    setRandomFact(null)
  }

  useEffect(() => {
    const apiFetch = async () => {
      try {
        const response = await axios.get('https://catfact.ninja/fact')
        setRandomFact(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    apiFetch()
  }, [counter])

  return (
    <div className='main-div'>
      {counter && (
        <img
          key={counter}
          className='cat-image'
          src={`https://cataas.com/cat?${counter}`}
          alt='random cat image'
        />
      )}

      <button
        className='cat-button'
        onClick={switchFact}
      >
        Show a random fact
      </button>
      <button
        className='cat-button'
        onClick={turnFact}
      >
        Hide fact
      </button>
      {randomFact && <h3 className='cat-fact'>{randomFact.fact}</h3>}
    </div>
  )
}
