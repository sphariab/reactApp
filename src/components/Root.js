import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
/*eslint-disable no-unused-vars*/
const Root = ({ store }) => (
	<Provider store={store}>
		<Router>
			<Route component={App} />
		</Router>
	</Provider>
);
/*eslint-disable no-unused-vars*/

Root.propTypes = {
	store: PropTypes.object.isRequired
};

export default Root;