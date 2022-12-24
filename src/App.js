import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import './App.css';
import axios from 'axios';
import Destination from "./components/destination";
import Tasks from "./components/tasks";

function App() {
  return (
    <div>
      <h1>Vacation Planner</h1>
      <div>
        {/*<ComposableMap>
          <Geographies geography={geoJSONData}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          </ComposableMap>*/}
          
      </div>
      <p>1. Select where you are going</p>
      <Destination/>
      <p>2. What needs to be done.</p>
      <Tasks/>
      
    </div>
  );
}


export default App;

