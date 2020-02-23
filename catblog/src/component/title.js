
import React, { Component } from 'react';



export default class Title extends Component {
constructor(props){
    super(props);
  
}

  

    myChangeHandler = (event) => {
        let val = event.target.value;
        this.props.changedTitle(val)
    }

     
    render() {

        console.log(this.state)

        return (
            <div>
               <h2>set your title here </h2>
            
                <input
                    name="title"
                    type='text'
                    value={this.props.title}
                    onChange={this.myChangeHandler}
                />
            </div>
        )
    }
}