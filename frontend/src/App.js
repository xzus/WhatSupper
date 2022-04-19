import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import calendarPage from './pages/calendarPage'
import homePage from './pages/homePage';


import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <NavBar/>
      <homePage/>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/calendarPage">
            <calendarPage />
          </Route>
        </Routes>
      </BrowserRouter> */}

    </div>
  );
}

export default App;
