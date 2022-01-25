import React from "react";
class ListItem extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            position:0,
            name:"name",
            mCap:0,
            price:0

        }
    }
    render(){
        return(
        <div className='list-item'>
            <h1 className='list-elem'># {this.props.position}</h1>
            <h1 className='list-elem'>{this.props.name}</h1>
            
            <h1 className='list-elem'>Price:{this.props.price}</h1>
            <h1 className='list-elem'>Market Cap:{this.props.mCap}</h1>
        </div>
        )
    }
}
export default ListItem;