import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import pic from "../Component/assets/profile.jpeg"
import Switch from '@mui/material/Switch';

const SideNavbar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader alignItems="center">
          <img src={pic} alt='pic' style={{height:'50px',width:'50px',borderRadius:'6px',marginLeft:'40px'}}/>
          {/* <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Samantha
          </a> */}
          <h4 style={{marginLeft:'40px',marginTop:'10px'}}>Samantha</h4>
          <p style={{marginLeft:'40px',fontSize:'11px',marginTop:'-10px',color:'grey'}}>72 km Since Join</p>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="active">
              <CDBSidebarMenuItem style={{color:'white',fontWeight:'1000'}}>Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Activity</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Challenge</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Settings</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Badges</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Messages</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
           <hr />
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Dark Mode 

          <Switch  defaultChecked />
          </div>

        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideNavbar;
