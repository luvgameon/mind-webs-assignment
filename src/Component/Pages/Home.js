import React from 'react'
import SideNavbar from '../SideNavbar'
import Mid from '../Mid'
import RightSide from '../RightSide'
import '../../App.css';

export default function Home() {
  return (
    <>
     <div className="App" style={{display:'flex', height:'100vh'}}>
     <SideNavbar/>
   <Mid/>
   <RightSide/>
   </div>
   </>
   
  )
}
