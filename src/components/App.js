import React from "react";
import About from "./About";
import Home from "./Home";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";

const App = () => (
	<div>
		<Header/>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/about" component={About} />
		</Switch>
	</div>
);
export default App;
