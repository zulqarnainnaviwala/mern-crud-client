import React from "react";
// components
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import EditUser from "./components/EditUser"
// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}
