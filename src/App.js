import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Components/Nav';
import MainApp from './MainApp';
import Appstate from './context/Appstate';

function App() {
  return (
    <Appstate >
      <BrowserRouter>
        < Nav />
        <div className='container'>
          <Routes>
            <Route path='/' element={<MainApp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Appstate>
  );
}

export default App;
