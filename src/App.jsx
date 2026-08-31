import { RouterProvider } from 'react-router-dom'
import './App.css'
import myRouter from './router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

function App() {

  return (
    <>
      <RouterProvider  router={myRouter}/>
      <ToastContainer   
    style={{
          background: 'transparent',
          boxShadow: 'none',
          padding: 0
        }} />
    </>
  )
}

export default App
