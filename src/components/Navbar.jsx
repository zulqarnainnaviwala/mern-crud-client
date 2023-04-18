import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

// css on mui component
const Header = styled(AppBar)`
  background: #111111;
`
const Tabs = styled(NavLink)`
    font-size:20px;
    margin-right:20px;
    color:inherit;
    text-decoration:none 
`

//css on plain html component
// const any = styled("p")`
//     font-size:20px;
//     ...
//     ...
// `

export default function Navbar() {

  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  return (
    // <AppBar>
    //     <Toolbar>
    //         <p>Home</p>
    //         <p>All Users</p>
    //         <p>Add Users</p>
    //     </Toolbar>
    // </AppBar>
    <Header position="static">
      <Toolbar>
        <Tabs to='/'>Home</Tabs>
        <Tabs to='/all'>All Users</Tabs>
        <Tabs to='/add'>Add Users</Tabs>
      </Toolbar>
    </Header>



  );
}
