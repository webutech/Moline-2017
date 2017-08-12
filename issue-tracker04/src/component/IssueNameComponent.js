import React from 'react';
const IssueNameComponent=(props)=>{
    return(
        <li onClick={()=>{
            props.clickHandler(props.index)
            }} className={props.issue.completed ? 'completed' : ''}>
            {props.issue.name}&nbsp;
            <button 
                onClick={(event)=>{
                    event.stopPropagation(),
                    props.deleteIssue(props.index)
                }}>X</button>
      </li>
    )
}
export default IssueNameComponent;