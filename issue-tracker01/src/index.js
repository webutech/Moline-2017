import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './HeaderComponent.jsx';
import './index.css'
class IssueListComponent extends React.Component{
  constructor(){
    super();
    this.changeStatus=this.changeStatus.bind(this);
    this.state={
      issues:[
        {name:"Create React Demo App",completed:false},
        {name:"Create PPT for ReactApp",completed:false},
        {name:"Create a POC in React and Redux",completed:false}
      ]
    }
  }

  changeStatus(index){
    var issues=this.state.issues;
    var issue=issues[index];
    issue.completed=!issue.completed;
    this.setState({
      issues:issues
    })
    console.log(this.state.issues[index])
  }
  render(){
    return(
      <ul>
        {
          this.state.issues.map((issue,index)=>{
               return <IssueNameComponent 
                key={issue.name} 
                issue={issue} 
                clickHandler={this.changeStatus} 
                index={index}/>
          })
        }
      </ul>
    )
  }
}

class IssueNameComponent extends React.Component{
  render(){
    return(
      <li onClick={()=>{
          this.props.clickHandler(this.props.index)
        }} className={this.props.issue.completed ? 'completed' : ''}>
        {this.props.issue.name}
      </li>
    )
  }
}

ReactDOM.render(<IssueListComponent/>,document.getElementById("root"));