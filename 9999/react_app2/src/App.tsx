import { useState } from 'react'

import './App.css'




function Boton() {
  return <button>Haz click</button>
}




function App() {
  const [count, setCount] = useState(0)
  const tasks = [
    { id: 1, title: "Estudiar React", completed: true },
    { id: 2, title: "Aprobar React", completed: false }

  ]

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>

      <h1>Hola</h1>

      </div>
    </>
  )
}

export default App
