import {useState, useEffect} from 'react'
import { useAxios } from './useAxios'

export const getGiffs = (category) => {
  const [first, setfirst] = useState({
    data:[]
  })

  useEffect(()=>{
    useAxios(category)
      .then(imgs => {
        setfirst({
          data: imgs
        })
      })
  }, [category])

  return first
}