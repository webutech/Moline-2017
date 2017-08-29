import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SelectedUser } from '../actions/index';
class UserList extends Component{

    createUserListItems(){
        return this.props.users.map((user)=>{
            return <li 
                key={user.id}
                onClick={()=>this.props.SelectedUser(user)}>
                
                {user.first} - {user.last}</li>
        })
    }
    render(){
        return(
            <ul>
                {this.createUserListItems()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return{
        users:state.users
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {SelectedUser:SelectedUser},dispatch
        )
}
export default connect(mapStateToProps,matchDispatchToProps)(UserList);