
import './App.css';
import Mid from './Component/Mid';



import SideNavbar from './Component/SideNavbar';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
   <>
    <Router>
      <div className="App" style={{display:'flex', height:'100vh'}}>
   <SideNavbar/>
   <Mid/>
   
   
      </div>
    </Router>
   </>
  );
}

export default App;
