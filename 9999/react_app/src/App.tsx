import { useState } from 'react'
import Card from './card'
import { CardBody } from './cardBody'
import { CardHeader } from './cardHeader'
import { CardFooter } from './cardFooter'
import goldengoImg from './assets/goldengo.png'
import Greeting from './greetings'
import UserInfo from './userInfo'
import Avatar from './avatarProps'
import TaskList from './taskList'
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

        <Avatar src={goldengoImg} alt="user" size={100} />
        <Greeting name="Adri" />
        <UserInfo name="Adri" age={24} email="Adri@gmail.com" />
        <TaskList tasks={tasks} />
        <Card>
          <CardHeader title="Producte" subtitle="Producte nou" />
          <CardBody>
            <p>Contingut del producte</p>
          </CardBody>
          <CardFooter>
            <button>Comprar</button>
          </CardFooter>
        </Card>

      </div>
    </>
  )
}

export default App
