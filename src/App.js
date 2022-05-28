import React, { useState, useEffect } from 'react'
import { useAxios } from './hooks/useAxios';
import Main from './Main';
const App = ({ defaultValue = [] }) => {


  const [categories, setCategories] = useState(defaultValue)
  const [valueInput, setValueInput] = useState('')

  const data = useAxios(valueInput)
  const getCategories = () => {
    console.log(data)
    data.then(setCategories)
  }
  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div>
      <Main category={setValueInput} />
      <span>{valueInput}</span>
      <div>
        {
          categories.map((item) => (<img src={item.url} />))
        }
      </div>
    </div>
  )
}

export default App