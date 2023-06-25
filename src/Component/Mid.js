import React from 'react'
import './Mid.css';
import ApexChart from './ApexChart';

import MyTable from './MyTable';
import Content from './Content';



export default function Mid() {
  return (
    <div className="content" >
     <Content title='Dashboard' sub='Running Last Week' km='48,74 KM'/>
     <ApexChart />
    <Content  sub='Weekly Rank' />
    <MyTable/>
   

   

   </div>
 
  )
}
