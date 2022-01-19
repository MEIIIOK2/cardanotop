import logo from './logo.svg';
import Example from './Example';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import React from "react";
import './App.css';

class App extends React.Component {
   
  
  render() {
      
      return (

        <div className = "App">
          <div className = "App-header">
            <h1>Marcetcaps</h1>
          </div>
          <Example/>
          
        </div>
      
  );
}
}
export default App;
