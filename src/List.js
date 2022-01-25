import React from "react";
import { currencies } from "./global";
import ListItem from "./ListItem";

import DataTable from 'react-data-table-component';
class List extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            data:[],
            isloaded:false
        };
    }
    async getCoin(cid){
        let response = await fetch('https://api.coingecko.com/api/v3/coins/'+cid+'?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false')
        let info = await response.json()
        return info
    }
    updateTable(){
        let reqs =[]
        currencies.map((cid)=> reqs.push(this.getCoin(cid)))
        let temp = []
        Promise.all(reqs).then((responses)=>{
            responses.forEach(resp =>{
                temp.push({ "Name": resp.name, "Price": resp.market_data.current_price.usd, "MarketCap": resp.market_data.market_cap.usd })
            })
            this.setState({
                data:temp,
                isloaded : true
            })
        })
    }
    
    componentDidMount(){
        this.updateTable()

        
        // this.gatherData().then(this.setState({
        //     isloaded:true
        // }))
        this.timer = setInterval(()=> this.updateTable(),10000)

        
    }
    render(){
        const columns = [
            {
                name: 'Coin',
                selector: row => row.Name,
                sortable:true
            },
            {
                name: 'Price',
                selector: row => row.Price,
                sortable:true
            },
            {
                name: 'Market Cap',
                selector: row => row.MarketCap,
                sortable:true
            },
        ];
        const {data,isloaded} = this.state;
        console.log(isloaded)
        if (!isloaded) {
            return(
                // <DataTable columns ={columns} data={data}/>
                <h1>Loading</h1>
            )
        }
        console.log('rendering')
        console.log(this.state.data)
        
        return(
           <DataTable columns ={columns} data={data} theme='dark'/>
        )
    }
}
export default List;