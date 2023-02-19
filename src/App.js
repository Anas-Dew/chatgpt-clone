import './App.css';
import Chat from './components/Chat';
import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Navbar heading="GPT"/>
      {/* <Sidebar/> */}
      <Chat/>
    </>
  );
}

export default App;
