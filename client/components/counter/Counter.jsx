import React, { Component } from 'react';
import styles from './Counter.scss';

const increment = step => ({ value }) => ({ value: value + step });

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
	}
	handleIncClick = () => {
		this.setState(increment(1));
	};
	handleDecClick = () => {
		this.setState(increment(-1));
	};
	render() {
		return (
			<div className={styles.container}>
				<div>{ this.state.value }</div>
				<a onClick={this.handleDecClick}>−</a>
				<a onClick={this.handleIncClick}>+</a>
			</div>
		);
	}
}

export default Counter;
