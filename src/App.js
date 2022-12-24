import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import './App.css';
import axios from 'axios';
import Destination from "./components/destination";
import Tasks from "./components/tasks";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import {useEffect, useState} from 'react';

function App() {

  const [rating, setRating] = useState(0)
  const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"
  return (
    <div>
      
      <h1>Vacation Planner</h1>

      <p>1. Select where you are going.</p>
            <Destination/>
      
      <ComposableMap style={{ width: '80%', height: '50%' }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
          
      
      
      <p>2. Now make a list of tasks you need to complete. (Title and description)</p>
      <Tasks/>
      <p class="p3">3. Rate your trip when you come back.</p>
      <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
      
    </div>
  );
}


export default App;

