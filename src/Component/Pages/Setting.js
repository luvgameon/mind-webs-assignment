import React from 'react'
import SideNavbar from '../SideNavbar'

import { Link } from 'react-router-dom'


export default function Setting() {
  return (
    <>
    <div style={{display:'flex' }}>
      <SideNavbar/>
      <div>

      <h1>This is Setting Page</h1>   <Link to='/'><button>Home</button></Link>
      </div>
      
    </div>
   
    </>
  )
}
