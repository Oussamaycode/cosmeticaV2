import { useState, useEffect } from 'react'
import { userService } from './services/userService' 

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    userService.getAllUsers().then(data => setUsers(data))
  }, [])

  return (
    <div className="App">
      <h1>My User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
