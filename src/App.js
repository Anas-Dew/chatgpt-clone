import './App.css';
import Chat from './components/Chat';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About';

function App() {
  return (
    <>
      <Router>
        <Navbar heading="Neural Mind AI"/>
        <Routes>
          <Route exact path='/' element={<Chat/>}></Route>
          <Route exact path='/chat' element={<Chat/>}></Route>
          <Route exact path='/admin' element={<About/>}></Route>
          <Route exact path='/train' element={<About/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
