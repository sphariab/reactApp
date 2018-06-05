import React from "react";
import PropTypes from "prop-types";
/*eslint-disable no-unused-vars*/
const Link = ({ active, children, onClick }) => (
	<button
		onClick={onClick}
		disabled={active}
		style={{
			marginLeft: "4px",
		}}>
		{children}
	</button>
);
/*eslint-disable no-unused-vars*/
Link.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
};
export default Link;