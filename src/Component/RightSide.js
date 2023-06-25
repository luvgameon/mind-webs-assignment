import React from 'react'
import './RightSide.css';
import pic1 from "../Component/assets/profile.jpeg";
import pic2 from "../Component/assets/1.jpeg";
import pic3 from "../Component/assets/2.jpeg";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import pic4 from "../Component/assets/3.jpeg"
import pic5 from "../Component/assets/4.jpeg"
import Content from './Content';
import Activity from './Activity';
import steps from "../Component/assets/steps.jpg"
import step2 from "../Component/assets/step2.png"
import step3 from "../Component/assets/step3.png"


export default function RightSide() {
  return (
    <div className='right'>
      <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>

     <h3>Stories</h3> <h3>+</h3>
      </div>
      <div style={{display:'flex',justifyContent:'space-between',borderBottom: '1px solid grey',paddingBottom:'30px'}}>
        <div style={{color:'grey'}}>
      <Stack direction="row" spacing={2} style={{ marginRight: "5px" }}>
                <Avatar alt="Remy Sharp" src={pic1}  />
              </Stack>{" "} Remo
              </div>
              <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:'center',color:'grey'}}>

              <Stack direction="row" spacing={2} style={{ marginRight: "5px" }}>
                <Avatar alt="Remy Sharp" src={pic2}  />
              </Stack>{" "} Max
              </div>
              <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:'center',color:'grey'}}>
              <Stack direction="row" spacing={2} style={{ marginRight: "5px" }}>
                <Avatar alt="Remy Sharp" src={pic3}  />
          
              </Stack>{" "} Joe
              </div>
              <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:'center',color:'grey'}}>

              <Stack direction="row" spacing={2} style={{ marginRight: "5px" }}>
                <Avatar alt="Remy Sharp" src={pic4}  />
              </Stack>{" "} Harry
              </div>
              <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:'center',color:'grey'}}>

              <Stack direction="row" spacing={2} style={{ marginRight: "5px" }}>
                <Avatar alt="Remy Sharp" src={pic5}  />
              </Stack>{" "} phenix
              </div>


      </div>
      <Content sub='Your Activity'/>
      <Activity pic={steps} tag='Another 10K Step Superb!' day='Today' steps='13,975 Steps'/>
      <Activity pic={step2} tag='You have completed the challenge Check Your Prize' day='Yesterday' steps='12,85 KM'/>
      <Activity pic={step3} tag='You have Reached 200K foot Steps' day='March 3' steps='12,875 Steps'/>
      

    </div>
  )
}
