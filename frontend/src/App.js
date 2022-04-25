
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/homePage';
import CalendarPage from './pages/calendar/calendarPage';
import GroceriesPage from './pages/groceriesPage';
import PantryPage from './pages/pantryPage';
import VotingPage from './pages/votingPage';
import PastRecipesPage from './pages/pastrecipesPage';

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

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/calendar' element={<CalendarPage />} />
          <Route path='/groceries' element={<GroceriesPage />} />
          <Route path='/pantry' element={<PantryPage />} />
          <Route path='/voting' element={<VotingPage />} />
          <Route path='/pastrecipes' element={<PastRecipesPage />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}



export default App;
