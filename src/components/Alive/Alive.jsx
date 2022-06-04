import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Box } from '@mui/material'

import CharacterCard from '../CharacterCard/CharacterCard';

const Alive = () => {

  const [characters, setCharacters] = useState([])

  const getCharacters = async () => {
    const url = 'https://rickandmortyapi.com/api/character/?status=dead'
    const response = await axios.get(url)
    console.log(response)
    setCharacters(response.data.results)
  }

  useEffect(() => {
    getCharacters()
  }, [])


  return (
    <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2}>
      {
        characters.map((character) => {
          return (
            <CharacterCard info={character} />
          )
        })
      }
    </Box>
  )
}

export default Alive