import './App.css';
import Chat from './components/Chat';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Tips from './components/Tips'
function App() {
  if (localStorage.getItem('theme') === "dark") {
    console.log("dark mode");
  } else {
    console.log("nope");
  }
  return (
    <>
      <Router>
        <Navbar heading="Dewchat"/>
        <Tips/>
        <Routes>
          <Route exact path='/' element={<Chat/>}></Route>
          <Route exact path='/chat' element={<Chat/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
