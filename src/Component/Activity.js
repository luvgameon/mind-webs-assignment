import React from 'react'

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function Activity({pic,day,steps,tag}) {
  return (
    <div style={{display:'flex',borderBottom: '1px solid grey',padding:'25px'}}>
         <Stack direction="row" spacing={2} style={{ marginRight: "5px" }}>
                <Avatar sx={{ height: '70px', width: '70px' }} alt="Remy Sharp" src={pic}  />
              </Stack>{" "}
              <div style={{display:'flex',flexDirection:'column',marginLeft:'25px'}}>
                <p style={{padding:'0px',margin:'0px',color:'grey',fontSize:'15px'}}>{day}</p>
                <h5 style={{padding:'0px',margin:'0px'}}>{steps}</h5>
                <p style={{padding:'0px',margin:'0px',color:'grey',fontSize:'15px'}}>{tag}</p>


              </div>
    
    
    </div>
  )
}
