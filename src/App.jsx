import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import CoffeCard from './component/CoffeCard'

const App = () => {
  const coffes=useLoaderData()
const [removeCoffe,setRemoveCoffe]=useState(coffes)
  return (
    <div>
  {
    coffes.map(coffe=><CoffeCard key={Math.random()} coffe={coffe } removeCoffe={removeCoffe} setRemoveCoffe={setRemoveCoffe}></CoffeCard>)
  }
    </div>
  )
}

export default App
