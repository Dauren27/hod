import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import { useSelector } from "react-redux";
import { RootState } from "./store/reducers/index";
import Events from "./pages/Events";
import Career from "./pages/Career";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";

function App() {
  const open = useSelector((state: RootState) => state.sidebarReducer.open);
  return (
    <div className="App"  style={{ height: "100vh", overflow: open && "hidden" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events/>} />
          <Route path="/career" element={<Career/>} />
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
