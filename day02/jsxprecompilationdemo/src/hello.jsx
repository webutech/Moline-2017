var Hello=React.createClass({
    render:function(){
        return(
            <div>
                <h1>JSX Precompilation Demo Example!</h1>
            </div>
        );
    }
});

ReactDOM.render(<Hello/>,document.getElementById('target'));