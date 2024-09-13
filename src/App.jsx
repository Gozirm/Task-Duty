import './App.css'
import EditTask from './component/EditTask'
import Home from './component/Home'
import NewTask from './component/NewTask'
import Task from './component/Task'
import Navbar from './layouts/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/task' element={<Task/>}/>
        <Route path='/edittask' element={<EditTask/>}/>
        <Route path='/newtask' element={<NewTask/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
