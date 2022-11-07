import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Form, Table } from './components'
import { UserContext, UsersProvider } from './context'

function App() {
  const [count, setCount] = useState(0)
  return (
    <UsersProvider>
      <div className="">
        <Form />
        <Table />
      </div>
    </UsersProvider>
  )
}

export default App
