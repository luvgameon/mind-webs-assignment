import React from 'react'
import { CDBBtn } from "cdbreact";

export default function Content({title,sub,km}) {
  return (
    <div  >
    <h2 style={{paddingTop:'20px'}}>{title}</h2>
    <div style={{display:'flex',justifyContent:'space-between',paddingRight:'60px'}}>
      {sub}
      <CDBBtn color="light" circle outline>
            Details
          </CDBBtn>
      
    </div>
    <h1 style={{fontSize:'25px'}}>{km} </h1>
    </div>
  )
}
