import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';

const App = () =>(
    <div>
            <h1>React-Redux App</h1>
            <hr/>
            <h2>User List</h2>
            <UserList/>
            <hr/>
            <h2>User Detail</h2>
            <UserDetail/>
    </div>
);

export default App;

