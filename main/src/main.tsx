import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import WujieReact from "wujie-react";
import './index.css'


const { bus, setupApp, preloadApp, destroyApp } = WujieReact;

preloadApp({
  name:"son1",
  exec:true,
  url:"http://localhost:5174"
})
preloadApp({
  name:"son2",
  exec:true,
  url:"http://localhost:5175"
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <WujieReact
      width="100%"
      height="100%"
      name="son1"
      url={'http://localhost:5174'}
      sync={true}
      fetch={fetch}
    ></WujieReact>
    <WujieReact
      width="100%"
      height="100%"
      name="son2"
      url={'http://localhost:5175'}
      sync={true}
      fetch={fetch}
    ></WujieReact>
  </React.StrictMode>,
)
