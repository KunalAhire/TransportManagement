import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Components/Nav';
import MainApp from './MainApp';
import Appstate from './context/Appstate';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <Appstate >
      <BrowserRouter>
        < Nav />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/mainpage' element={<MainApp />} />
          </Routes>
      </BrowserRouter>
    </Appstate>
  );
}

export default App;
