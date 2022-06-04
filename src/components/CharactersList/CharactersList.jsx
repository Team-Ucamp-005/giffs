import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CharacterCard from '../CharacterCard/CharacterCard';
import { Box } from '@mui/material'

const CharactersList = () => {

  const [characters, setCharacters] = useState([]);
  const [valueInput, setValueInput] = useState('');

  const getCharacters = async () => {
    const url = 'https://rickandmortyapi.com/api/character'
    const response = await axios.get(url)
    console.log(response)
    setCharacters(response.data.results)
  }
  const getCharacter = async (value) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${value}`
    const response = await axios.get(url)
    console.log(response)
    setCharacters(response.data.results)
  }

  // useEffect(() => {
  //   console.log('useEffect')
  // }, [valueInput])

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <section>
      <input type="text" onChange={e => setValueInput(e.target.value)} />
      <button onClick={() => getCharacter(valueInput)}> Buscar </button>
      <h3>
        {valueInput}
      </h3>
      <div>
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2}>
          {
            characters.map((character) => {
              return (
                <CharacterCard info={character} />
              )
            })
          }
        </Box>
      </div>
    </section>
  )
}

export default CharactersList