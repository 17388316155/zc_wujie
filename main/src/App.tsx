import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getData } from 'common'


function App() {
  const [count, setCount] = useState(0)
  console.log('getData =>',getData)
  console.log('test merge')
  console.log('test merge2')
  return (
    <div className="App" style={{backgroundColor:'#006241',width:'500px',height:'500px'}}>
      这是我的无界主应用
    </div>
  )
}

export default App
