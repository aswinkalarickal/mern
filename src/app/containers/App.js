import React from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";

import {Root} from "../components/Root";
import {Home} from "../components/Home";
import TaskList from "../components/TaskList";
import {SamplePage} from "../components/SamplePage";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Root>
                    <Route exact path="/" component={Home}/>
                    <Route path="/todo/" component={TaskList}/>
                    <Route path="/sample/" component={SamplePage}/>
                </Root>
            </Router>
        );
    }
}

export default connect(state => {return state;}, {})(App);
