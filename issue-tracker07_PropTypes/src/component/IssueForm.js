import React from 'react';
import PropTypes from 'prop-types';
const IssueForm = (props) =>{
    return (
        <div>
        <form onSubmit={props.addIssue}>
            <input type="text" 
                value={props.currentIssue}
                onChange={props.updateIssue}
            />
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

IssueForm.prototype={
     currentIssue:React.PropTypes.func,
     updateIssue:React.PropTypes.func,
     addIssue:React.PropTypes.func
}
export default IssueForm;