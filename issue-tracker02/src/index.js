import React from 'react';
import ReactDOM from 'react-dom';
import IssueNameComponent from './component/IssueNameComponent.jsx';
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
      <div>
        <h2>Issue Tracker App</h2>
        <hr/>
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
      </div>
    )
  }
}



ReactDOM.render(<IssueListComponent/>,document.getElementById("root"));