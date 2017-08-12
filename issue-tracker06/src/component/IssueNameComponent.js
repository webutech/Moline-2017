import React from 'react';
class IssueNameComponent extends React.Component{
    constructor(props){
        super(props);
        this.renderForm = this.renderForm.bind(this);
        this.renderIssues = this.renderIssues.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.updateIssue = this.updateIssue.bind(this);
        this.state = {
            isEditing:false
        }

    }

    updateIssue(event){
        event.preventDefault();
        //console.log('----updateIssue-------',this.input.value)
        this.props.editIssue(this.props.index, this.input.value);
        this.toggleState();
    }
    toggleState(){
        const {isEditing} = this.state;
        this.setState({
            isEditing:!isEditing
        })
    }
    renderIssues(){
        return(
            <li onClick={()=>{
                            this.props.clickHandler(this.props.index)
                            }} className={this.props.issue.completed ? 'completed' : ''}>
                            {this.props.issue.name}&nbsp;
                            <button 
                            onClick={(event)=>{
                            event.stopPropagation()
                            this.props.deleteIssue(this.props.index)
                            }}>X</button>
                             <button 
                            onClick={(event)=>{
                            event.stopPropagation()
                            this.toggleState()
                            }}>Edit Issue</button>
            </li>
        )
    }
    renderForm(){
        return(
            <form onSubmit={this.updateIssue}>
                <input type="text" 
                       defaultValue={this.props.issue.name}
                       ref={(value) => { this.input = value; }}
                       />
                <button type="submit">update</button>
            </form> 
        )
    }
    render(){  
        //const isEditing = this.state.isEditing;
        const {isEditing} = this.state; /* same as above statement, can be written in ES6,when local and state variable is same*/
    return(
        <section>
            {
                isEditing ? this.renderForm() : this.renderIssues()
            }
         </section>
    )   
    }
}
export default IssueNameComponent;