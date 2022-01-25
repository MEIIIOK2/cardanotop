import logo from './logo.svg';
import Example from './Example';
import List from './List';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import React from "react";
import './App.css';

class App extends React.Component {
   
  
  render() {
      
      return (

        <div className = "App">
          <div className = "top-table">
            <List/>
          </div>
          
          <div className = "App-header">
            <h1>Market Cap Chart</h1>
            <Example/>
          </div>
          
          
          
        </div>
      
  );
}
}
export default App;
