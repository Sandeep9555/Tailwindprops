import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
let  myObj={
  username:"Sandeep Singh",
  age:21
}
let newArr=[1,2,3];
  return (
    <>
    <Card username="chaiaurcode" btnText="clicke me"/>
    <Card username="Sandeep Singh" btnText="visit me"/>
    </>
  )
}

export default App
