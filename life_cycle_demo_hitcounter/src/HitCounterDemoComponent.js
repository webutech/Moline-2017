import React from 'react';
class HitCounterDemoComponent extends React.Component{
    constructor(props){
        super(props);
        console.log('-----HitCounterDemoComponent.constructor()--------')
        this.state={
            count:0
        }
    }
    incrementHitCounter = () =>{
        
            this.setState(
                {
                    count:this.state.count+1
                }
            )
    }
    render(){
        console.log('-----HitCounterDemoComponent.render()--------')
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementHitCounter}>Increment Hit Counter</button>
            </div>
        )
    }
}

export default HitCounterDemoComponent;