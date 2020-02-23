
import React, { Component } from 'react';



export default class SetColor extends Component {
constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  
}

  

    onSubmit = (color) => {
     this.props.changeColor(color)
      
    }

     
    render() {

        console.log(this.state)

        return (
            <div>
               <h2>set your colour{this.props.color}</h2>
               
               <div  style={{backgroundColor:this.props.color==='red'?'red':'white'}} onClick= {()=>this.onSubmit("red")}>Red</div>
               <div style={{backgroundColor:this.props.color==='blue'?'blue':'white'}} onClick= {()=>this.onSubmit("blue")}>Blue</div>
               <div style={{backgroundColor:this.props.color==='green'?'green':'white'}} onClick= {()=>this.onSubmit("green")}>Green</div>
            </div>
        )
    }
}