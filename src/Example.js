
import React from "react";
import {
  
  
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
var _=require('lodash');
const currencies = [
    'adax',
    'ardana',
    'kick-io'
];
const url='https://api.coingecko.com/api/v3/coins/adax/market_chart?vs_currency=usd&days=365&interval=daily';

class Example extends React.Component {
// Constructor 
constructor(props) {
    super(props);

    this.state = {
        items: [],
        DataisLoaded: 0
    };
    this.onChangeBool = this.onChangeBool.bind(this)
    this.onSetData = this.onSetData.bind(this)
}
onChangeBool(){
  this.setState({
    DataisLoaded: this.state.DataisLoaded+1
  })
}
onSetData(data){
  this.setState({
    items:data
  })
}

// ComponentDidMount is used to
// execute the code 
componentDidMount() {
  let data = []
  
    for (let index = 0; index < currencies.length; index++) {
      let a = 'https://api.coingecko.com/api/v3/coins/'+currencies[index]+'/market_chart?vs_currency=usd&days=365&interval=daily'
      let cim = currencies[index]
      const b = []
      fetch(a).then((res)=>res.json().then((json)=>json.market_caps.map((n)=>b.push({"date":new Date(n[0]).toLocaleDateString('en-US'), [cim]:parseInt(n[1])})))).then(function(result){
        if (index!=0) {
          console.log(data)
          console.log(b)
         
          data = data.map(t1 => ({...t1, ...b.find(t2 => t2.date === t1.date)}))
          console.log(data);
        
        }
        else{
          data=b
        }
        return data
      }).then((dt)=>this.setState({
        items:dt,
        DataisLoaded:this.state.DataisLoaded+1
      }))
      
      
    }
    // console.log('gddsgds')
    // this.setState({
    //   items:data
    // });
}
render() {
    const { DataisLoaded, items } = this.state;
    
    console.log(items)
    console.log(DataisLoaded)
    if (DataisLoaded<2) {
      
      return(
        <h1>Loading, please wait</h1>
      )
    }

     console.log('Rendering')
    return (
      
     <ResponsiveContainer width = "70%" height = "70%" minHeight = {10}>
     <AreaChart data={items}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#72ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#32ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="date" />
  <YAxis dataKey="adax" width= {100} />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Legend/>
  <Area type="monotone" dataKey="adax" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="ardana" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
  <Area type="monotone" dataKey="kick-io" stroke="#22ca6d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
    </ResponsiveContainer>
    
);
}
}
export default Example;