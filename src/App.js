
import './App.css';

import Home from './Component/Pages/Home';
import ProfilePage from './Component/Pages/ProfilePage';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Setting from './Component/Pages/Setting';


function App() {
  return (
   <>
    <Router>
      <Routes>
      <Route exact path='/profile' element={<ProfilePage/>}>

          </Route>
      <Route exact path='/setting' element={<Setting/>}>

          </Route>
      <Route exact path='/' element={<Home/>}>

          </Route>
      </Routes>
      
    </Router>
   </>
  );
}

export default App;
