import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/homePage';
import calendarPage from './pages/calendarPage'

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <NavBar/>

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
