import React from 'react';
import { Routes, Route, Navigate} from "react-router-dom"
import Users from "./users";
import Posts from "./posts";
import Sidebar from "../sidebar";

function Dashboard() {
    return (
      <div className="container"> 
          <h1>Dashboard</h1>
          <Sidebar />
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
      </div>
    );
  }
  
  export default Dashboard;