import React, {Component, Fragment} from 'react';

import axios from 'axios';

class UserData extends Component {


    constructor() {
        super();

        this.state = {
            user: {},
            userId: 0
        }
    }


    getData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.userId + 1}`)
        .then(res => {
            const user = res.data;
            this.setState(prevState=>{
                return({
                    user:user,
                    userId: prevState.userId + 1
                })
            });

        });
    }


    componentDidMount() {

    //    let thisObj = this; 
    //    setTimeout(function(){
    //     fetch('https://jsonplaceholder.typicode.com/users/1')
    //     .then(response => response.json())
    //     .then(json =>{
    //         thisObj.setState({user: json})
    //     });
    //    }, 5000)


       this.getData();
       
    }

    render() {
     
        return (
            <Fragment>
                <h1>{(this.state.user.name !== undefined)?this.state.user.name:'Ładuje...'}</h1>
                <button onClick={this.getData}>Get next user</button>
            </Fragment>
        );
    }

}

export default UserData;