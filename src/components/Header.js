import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {activeClasses: [true, false]};
		this.addActiveClass= this.addActiveClass.bind(this);
	}

	addActiveClass(index) {
		this.setState({activeClasses: [false, false]});
		const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)];
		this.setState({activeClasses});
	}

	render() {
		const activeClasses = this.state.activeClasses.slice();
		return (
			<div className="navigation">
				<ul className="navigation-list">
					<li className="navigation-list__item">
						<Link to="/" >
                        Home
						</Link>
					</li>
					<li className="navigation-list__item">
						<Link  to="/about">
                        About
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Header;
