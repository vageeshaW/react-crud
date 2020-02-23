
import React, { Component } from 'react';
import axios from 'axios';


export default class CreateCat extends Component {
constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        name: "",
        description: ""
    }
}

  

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
          name: this.state.name,
          description: this.state.description,
        };
        axios.post('http://localhost:8080/cats/add', obj)
            .then(res => console.log(res.data));
        
        this.setState({
          name: '',
          description: '',
         
        })

        this.props.history.push("/");
      }
     
    render() {

        console.log(this.state)

        return (
            <div>
                <p>Name:</p>
                <input
                    name="name"
                    type='text'
                    onChange={this.myChangeHandler}
                />
                <p>Description:</p>
                <input
                    name="description"
                    type='text'
                    onChange={this.myChangeHandler}
                />

                <button onClick= {this.onSubmit}>save</button>

            </div>
        )
    }
}