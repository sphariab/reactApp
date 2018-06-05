import React from "react";
import { fetchUsers } from "../reducers";
import { sortByAscField, sortByDescField } from "../reducers";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sorted: false,
			firstUserNum: 0,
			lastUserNum: 10
		};

	}

	componentDidMount() {
		this.props.dispatch(fetchUsers(this.state.firstUserNum, this.state.lastUserNum));
	}

	render() {
		const {error, loading, users} = this.props;
		let usersList;

		if (error) {
			return <div>Error! {error.message}</div>;
		}

		if (loading) {
			return <div className="preloader-img">
				<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
			</div>;
		}

		if (users && users.length > 0) {
			usersList = users.map(function (user) {
				return (
					<div className="user-info" key={user.id}>
						<div className="user-info__image">
							<img src={user.avatar} alt=""/>
						</div>
						<div className="user-info__items">
							<p className="user-info-item">{user.first_name}</p>
							<p className="user-info-item">{user.last_name}</p>
							<p className="user-info-item">{user.email}</p>
							<p className="user-info-item">{user.company}</p>
							<p className="user-info-item">{user.address}</p>
							<p className="user-info-item">{user.phone}</p>
						</div>
					</div>
				);
			});
		} else {
			usersList = <div>no users</div>;
		}

		return  <div className="main">
			<h1>Home</h1>
			<div>
				<button className="sort-btn" onClick={this.sortField.bind(this)}>Sort by id</button>
				<button className="sort-btn" onClick={this.fetchNextUsers.bind(this)}>next</button>
				<button className="sort-btn" onClick={this.fetchNextUsers.bind(this)}>prev</button>
			</div>

			{usersList}
		</div>;
	}

	fetchNextUsers(){
		this.state.firstUserNum = this.state.firstUserNum + 10;
		this.state.lastUserNum = this.state.lastUserNum + 10;
		this.props.dispatch(fetchUsers(this.state.firstUserNum, this.state.lastUserNum));
		this.forceUpdate();
	}

	fetchPrevUsers(){
		this.state.firstUserNum = this.state.firstUserNum - 10;
		this.state.lastUserNum = this.state.lastUserNum - 10;
		this.props.dispatch(fetchUsers(this.state.firstUserNum, this.state.lastUserNum));
		this.forceUpdate();
	}

	sortField () {
		this.setState({
			sorted: !this.state.sorted
		});

		!this.state.sorted? this.props.dispatch(sortByDescField()) : this.props.dispatch(sortByAscField());
		this.forceUpdate();
	}
}

const mapStateToProps = state => ({
	users: state.items,
	error: state.error,
	loading: state.loading

});
/*eslint-disable no-unused-vars*/
Home.propTypes = {
    users: PropTypes.array.isRequired,
    error: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(Home);

