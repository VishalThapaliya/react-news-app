import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsBody from './components/NewsBody'

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <>
      <Navbar setCategory = {setCategory} />
      <NewsBody category = {category} />
    </>
  )
}

export default App