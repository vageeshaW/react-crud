
import React, { Component } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom'
import Title from '../component/title'


export default class CatList extends Component {

    constructor(props){
    super(props);
    this.changeTitle = this.changeTitle.bind(this);
    this.state = {
        cats:[],
        title:""
    }

    }
    componentDidMount () {
        axios.get( 'http://localhost:8080/cats',{
              headers: { "x-api-key": 'b385d5a8-403b-486f-948b-0bfa3730ed74' }
              } )
            .then( response => {
                console.log(response)
                const catData = response.data;
                this.setState({cats:catData});
                
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
            });
    }

    changeTitle = (value)=>{
       this.setState({title:value})
    }
    render() {
       
        const myStyleList = {
            listStyle: "none",
            
          };

          const myStyle = {
            padding: "10px",
            float:'left',
            height: "280px",
            width: "200px",
            borderRadius: "10px"
            
          };

        return (
            <div>
        <h3>{this.state.title}</h3>
        <ul style={myStyleList}>
            { this.state.cats.map((cat,i) => 
            <li key= {i} >
                <div style={myStyle} >
                <Link to={"/cat/"+cat._id}>   
                <h3>{cat.name}</h3>
                </Link>
                {cat.description}
                </div>
                </li>
            )}
         </ul>
         <br></br>
         <Title title={this.state.title} changedTitle={this.changeTitle}/>
        </div>
        )
    }
}