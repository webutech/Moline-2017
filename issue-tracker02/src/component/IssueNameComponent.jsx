import React from 'react';
const IssueNameComponent=(props)=>{
    return(
        <li onClick={()=>{
            props.clickHandler(props.index)
            }} className={props.issue.completed ? 'completed' : ''}>
            {props.issue.name}
      </li>
    )
}
export default IssueNameComponent;