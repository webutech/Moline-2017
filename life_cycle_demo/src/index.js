import React from 'react';
import ReactDOM from 'react-dom';

class LifeCycleDemoComponent extends React.Component{

    constructor(){
        super();
        this.state={
            methods:['constructor()','componentWillMount()','render()','componentDidMount()']
        }
        console.log('------constructor called-------');
    }

    componentWillMount(){
        console.log('------componentWillMount called-------');
    }

    componentDidMount(){
        console.log('------componentDidMount called-------');
    }
    render(){
        console.log('------render called-------');
        return (
            <div>
                <h1>Demo of LifeCycle Methods</h1>
                <hr/>
                <h2>Open the browser console to check the output</h2>
                <h3>
                    Mounting
                </h3>
                <p>These methods are called when an instance of a component is being created and instered into the DOM.</p>
                <ul>
                    {this.state.methods.map((method)=>{return <MethodNameComponent key ={method} method={method}/>})}
                </ul>
            </div>
            )
    }
}

class MethodNameComponent extends React.Component{
    render(){
        return(
            <li>{this.props.method}</li>
        )
    }
}

ReactDOM.render(<LifeCycleDemoComponent />, document.getElementById('root'));

