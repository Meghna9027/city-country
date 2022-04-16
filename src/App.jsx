import "./App.css";
import React from "react";
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


import { Country } from "./components/Country";
function App() {
  return (
    // <Router>
    <div className="App">
      <Country />
    {/* <Routes>
      <Route exact path='/' element={<Country />}></Route>
      <Route exact path='/add-country' element={prompt("Enter Country")}></Route>
      <Route exact path='/add-city' element={prompt("Enter City")}></Route>
    </Routes> */}
    </div>
    // </Router>
  );
}

export default App;
