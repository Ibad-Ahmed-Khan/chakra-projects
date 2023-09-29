import logo from "./logo.svg";
import React from "react";
import UserProfile from "./components/UserProfile.jsx";
import { users } from "./Data/Data";
import "./App.css";

function App() {
  return (
    <div className="parent">
      <UserProfile users={users} />
    </div>
  );
}

export default App;
