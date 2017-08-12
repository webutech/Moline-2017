import React from 'react';
class HeaderComponent extends React.Component{
    constructor(){
        super();
        this.state={
            headerText:"Yash Training Management App",
            "logo":"YTMS"
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.headerText}</h1>
                <h3>{this.state.logo}</h3>
            </div>
        );
    }
}
export default HeaderComponent;