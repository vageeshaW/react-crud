
import React, { Component } from 'react';
import axios from 'axios';
import SetColor from '../component/setColor'

export default class Cat extends Component {
    constructor(props){
    super(props);
    this.saveHandler = this.saveHandler.bind(this);
    this.state = {
       // cat: {},
       name:'',
       description:'',
       color:"red"
    }
    }
    componentDidMount() {

        const catId = this.props.match.params.id
        axios.get('http://localhost:8080/cats/' + catId, {
            headers: { "x-api-key": 'b385d5a8-403b-486f-948b-0bfa3730ed74' }
        })
            .then(response => {
                console.log(response)
                const catDetails = response.data;
                //this.setState({ cat: catDetails });
                this.setState(catDetails)

            })
            .catch(error => {
                // console.log(error);
                this.setState({ error: true });
            });
    }

    deleteHandler = () => {


        const catId = this.props.match.params.id
        axios.get('http://localhost:8080/cats/' + catId + '/delete', {
            headers: { "x-api-key": 'b385d5a8-403b-486f-948b-0bfa3730ed74' }
        })
            .then(response => {
                console.log(response)

            })

        this.props.history.push("/");
    }

    myChangeHandler = (event) => {
        console.log(event)
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });

    }

    saveHandler(e) {

        const obj = {
            name: this.state.name,
            description: this.state.description,
        };
        const catId = this.props.match.params.id
        axios.post('http://localhost:8080/cats/' + catId + '/update', obj)
            .then(res => console.log(res.data));

       

       
    }

    colorHandler= (col)=>{
     this.setState({color:col})

    }

    render() {

        const Style = {
            backgroundColor:this.state.color
        }

        console.log(this.state)
        return (
            <div>
                   <h1 style= {Style}>{this.state.name}</h1>
               

                <p>Name:</p>
                <input
                    name="name"
                    type='text'
                    onChange={this.myChangeHandler}
                    value={this.state.name}
                />
                <p>Description:</p>
                <input
                    name="description"
                    type='text'
                    onChange={this.myChangeHandler}
                    value={this.state.description}
                />
                <br></br>
                <button onClick={this.deleteHandler}>Delete</button>
                <button onClick={this.saveHandler}>Save Changes</button>
                <br></br>
                <br></br>
               <SetColor color={this.state.color} changeColor={this.colorHandler}/>
            </div>
        )
    }
}