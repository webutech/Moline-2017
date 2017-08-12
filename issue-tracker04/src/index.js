import React from 'react';
import ReactDOM from 'react-dom';
import IssueNameComponent from './component/IssueNameComponent.js';
import IssueForm from './component/IssueForm.js';
import './index.css'
class IssueListComponent extends React.Component{
  constructor(){
    super();
    this.changeStatus=this.changeStatus.bind(this);
    this.updateIssue=this.updateIssue.bind(this);
    this.addIssue=this.addIssue.bind(this);
    this.deleteIssue=this.deleteIssue.bind(this);
    this.state={
      issues:[
        {name:"Create React Demo App",completed:false},
        {name:"Create PPT for ReactApp",completed:false},
        {name:"Create a POC in React and Redux",completed:false}
      ],
      currentIssue:''
    }
  }

  deleteIssue(indexTobeDeleted){
    console.log(indexTobeDeleted);
    let issues=this.state.issues;
    issues.splice(indexTobeDeleted,1);
    this.setState({
      issues:issues
    })
  }

  
  addIssue(event){
    event.preventDefault();
    // console.log('---------Add Issue Triggered------------');
    let issues=this.state.issues;
    let currentIssue=this.state.currentIssue;

    issues.push({
      name:currentIssue,
      completed:false
    })

    this.setState({
      issues:issues,
      currentIssue:''
    })

    

  }
  updateIssue(newValue){
      this.setState({
        currentIssue:newValue.target.value
      })
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
      <div>
        <h1>Issue Tracker App</h1>
        <hr/>
        <section>
          <IssueForm 
            currentIssue={this.state.currentIssue}
            updateIssue={this.updateIssue}
            addIssue={this.addIssue}/>
            <ul>
              {
                this.state.issues.map((issue,index)=>{
                    return <IssueNameComponent 
                      key={issue.name} 
                      issue={issue} 
                      clickHandler={this.changeStatus} 
                      deleteIssue={this.deleteIssue}
                      index={index}/>
                })
              }
            </ul>
          </section>
      </div>
    )
  }
}



ReactDOM.render(<IssueListComponent/>,document.getElementById("root"));