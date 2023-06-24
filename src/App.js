
import './App.css';

import Details from './Component/Details';

import SideNavbar from './Component/SideNavbar';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
   <>
    <Router>
      <div className="App" style={{display:'flex', height:'100vh'}}>
   <SideNavbar/>
   <Details/>
   
   
      </div>
    </Router>
   </>
  );
}

export default App;
