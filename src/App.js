import logo from './logo.svg';
import Example from './Example';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import React from "react";
import './App.css';

class App extends React.Component {
   
  
  render() {
      
      return (
        <div className = "App-header">
          <Example/>
        </div>
      
  );
}
}
export default App;
