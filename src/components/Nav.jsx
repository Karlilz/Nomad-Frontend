import React from "react";
import Header from "../components/Header"
import { Outlet } from "react-router-dom";


 const Nav = (props) => {
return (
    <div>
        <Header user ={props.user} setUser = {props.setUser}/>
        <Outlet />
    </div>
  );
};

export default Nav;


