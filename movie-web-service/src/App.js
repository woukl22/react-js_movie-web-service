import React from "react";
import PropTypes from "prop-types";

class App extends React.Coponent{
	state = {
		count: 0
	};
	add = () => {
		this.setState(current => ({ count: current.count + 1 }));
	};
	minus = () => {
		this.setState(current => ({ count: current.count - 1 }));
	};
	render() {
		return 
		<div> 
			<h1>Im a class {this.state.count}</h1>
			<button onClick={this.add}>Add</button>
			<button onClick={this.minus}>Minus</button>
		</div>
	};
}

export default App;