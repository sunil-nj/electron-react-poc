import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
        {/* <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<ListEmployeeComponent />} />
                <Route path="/employees" element={<ListEmployeeComponent />} />
                <Route path="/add-employee/:id" element={<CreateEmployeeComponent />} />
                <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
            
            </Routes>
        </BrowserRouter> */}
        <div>Test</div>
    </div>
    
  );
}

export default App;
