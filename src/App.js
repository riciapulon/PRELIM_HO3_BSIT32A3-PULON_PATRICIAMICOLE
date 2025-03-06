import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PropsPage from "./pages/PropsPage";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/props" element={<PropsPage message="Hello World!" />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
