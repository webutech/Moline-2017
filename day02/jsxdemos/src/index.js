import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HelloMessage extends React.Component{
    getFormTile(){
        return "User Registration Form";
    }
    render(){
        var myStyle={
            color:'red',
            margin:20
        }

        var navigation=(
            <ul id="nav">
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">SERVICE</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        );
      
        return (
            <div id="container">
                {navigation}
                <h1 style={myStyle}>{this.getFormTile()}</h1>
                <div>
                   <table id="registrationForm">
                        <tr>
                            <td>Name</td>
                            <td><input type="text" name="name"/></td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td><input type="text" name="contact"/></td>
                        </tr>
                        <tr>
                            
                            <td className='rightAlign' colSpan="2"><button>Register</button></td>
                        </tr>
                   </table>
                </div>

            </div>

        );
    }
}

ReactDOM.render(<HelloMessage></HelloMessage>,document.getElementById('root'));