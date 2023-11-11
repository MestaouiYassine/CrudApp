import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectList from "./views/ProjectList"
import ProjectCreate from "./views/ProjectCreate"
import ProjectEdit from "./views/ProjectEdit"
import ProjectShow from "./views/ProjectShow"
    
function Main() {
    return (
        <Router>
            <Routes>
                <Route exact path="/"  element={<ProjectList/>} />
                <Route path="/create"  element={<ProjectCreate/>} />
                <Route path="/edit/:id"  element={<ProjectEdit/>} />
                <Route path="/show/:id"  element={<ProjectShow/>} />
            </Routes>
        </Router>
    );
}
    
export default Main;
    
if (document.getElementById('root')) {
    const rootElement = document.getElementById("root");
    const root = createRoot(rootElement);
  
    root.render(
        <Main />
    );
}