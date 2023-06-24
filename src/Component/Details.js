import React from 'react'
import './Details.css';
import { CDBBtn } from "cdbreact";
import ApexChart from './ApexChart';
import DarkTable from './DarkTable';

export default function Details() {
  return (
    <div className="content" >
    <h2 style={{paddingTop:'20px'}}>DashBoard</h2>
    <div style={{display:'flex',justifyContent:'space-between',paddingRight:'60px'}}>
      Running Last Week 
      <CDBBtn color="light" circle outline>
            Details
          </CDBBtn>
      
    </div>
    <h1 style={{fontSize:'25px'}}>48,75KM</h1>
    <div style={{height:'100px',paddingRight:'60px'}}>
    <ApexChart/>
    <div style={{display:'flex',justifyContent:'space-between',paddingRight:'4px'}}>
      Weekly Run Rank
      <CDBBtn color="light" circle outline>
            Details
          </CDBBtn>
      
    </div>
    <DarkTable/>

    </div>

   </div>
  )
}
