import './App.css';
import Chat from './components/Chat';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Tips from './components/Tips'
function App() {
  var theme_nav = "light"
  var text_theme = "dark"
  if (localStorage.getItem('theme') === "dark") {
    console.log("dark mode");
    theme_nav = "dark"
    text_theme = "light"
  } else {
    console.log("nope");
  }
  return (
    <>
      <Router>
        <Navbar theme={theme_nav} text_theme={text_theme} heading="Dewchat"/>
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
