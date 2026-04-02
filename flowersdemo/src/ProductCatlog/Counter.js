import React, { useState,useEffect } from 'react';

class Counter extends React.Component 
    {
        constructor(props){
            super(props);   
            this.state={count :props.count};
        }
        render(){
            return(
             <div>
             <button onClick={()=>{
                console.log("unlike")
                // this.props.count=this.props.count-1;
                this.setState({count:this.state.count-1});
                console.log("decrease");
             }}>-</button>

             <input type="text" value={this.state.count} readOnly />
             
             <button onClick={()=>{
                console.log("like")
                // this.props.count=this.props.count+1;
                this.setState({count:this.state.count+1});
                console.log("increase");
             }}>+</button> 
             </div>
            );
        }
    }

export default Counter;
