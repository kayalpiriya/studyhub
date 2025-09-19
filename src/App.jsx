
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/home';
import Navbar from './components/navbar';
import AddStudent from './components/addstudents';
import About from './components/about';


function App() {


  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<AddStudent />} />
        <Route path='/home' element={<Home />}></Route>
        <Route path='/addstudents' element={<AddStudent />}></Route>
        <Route path='/about' element={<About />}></Route>

      </Routes>

    </>
  )
}

export default App;
