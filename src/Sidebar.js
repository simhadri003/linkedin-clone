import React from 'react';
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import "./Sidebar.css";
import {Avatar} from "@material-ui/core";

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )




    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80.unsplash.com/photo-1486848538113-ce1a4923fbc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80.1&auto=format&fit=crop&w=687&q=80.com/svg/vstatic/svg/147/147144.svg?token=exp=1610631304~hmac=edab6f33601d6cfb50467bb4301640f3" alt=""/>
                <Avatar src={user.photoUrl} className="sidebar__avatar">  
                {user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>        
                
            </div>
         <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                 <p>Views on post</p>
                <p className="sidebar__statNumber">2,448</p>
             </div>
             </div>  
             <div className="sidebar__bottom">
                <p>Recent</p> 
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}                
                 </div> 
            
        </div>
    );
}

export default Sidebar;
