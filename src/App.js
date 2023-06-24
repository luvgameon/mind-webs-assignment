
import './App.css';
import SideNavbar from './Component/SideNavbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
   <>
    <Router>
      <div className="App">

   <SideNavbar/>
      </div>
    </Router>
   </>
  );
}

export default App;
