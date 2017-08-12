import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {
    BrowserRouter as Router, 
    Route,
    NavLink
} from 'react-router-dom';

const HomeComponent = () =>(
    <h1>Home Page</h1>
)
const AboutComponent = () =>(
    <h1>About Page</h1>
)
const ContentDetails = (props) =>(
    <div>{props.match.params.contentName ? <div><img src={'http://lorempixel.com/400/200/'+props.match.params.contentName+'/1/'}/></div> : null }</div>
)
const ContentComponent = () =>(
    <div>
    <h1>Contenet Page</h1>
    <div>
       <NavLink className="list-group-item" exact activeClassName="active" to="/content/city">City</NavLink> 
       <NavLink className="list-group-item" exact activeClassName="active" to="/content/sports">Sports</NavLink> 
        <Route path="/content/:contentName" component={ContentDetails}/>
            
    </div>
    </div>
)


const Links = () =>(
    <div className="list-group">
        <NavLink className="list-group-item" exact activeClassName="active" to="/">Home</NavLink>
        <NavLink className="list-group-item" activeClassName="active" to="/about">About</NavLink>
         <NavLink className="list-group-item" activeClassName="active" to="/content">Content</NavLink>
    </div>
)
const RouterComponent = () =>(
    <Router>
        
        <div className="row">
            <section className="col-sm-4">
            <Links/>
            </section>
            <section className="col-sm-8">
            <Route exact path="/" component={HomeComponent}/>
            <Route path="/about" component={AboutComponent}/>
             <Route path="/content" component={ContentComponent}/>
            </section>
        </div>
    </Router>
)

ReactDOM.render(<RouterComponent/>,document.getElementById("root"));
