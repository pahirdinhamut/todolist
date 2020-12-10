import React, { Component, Fragment } from 'react';

class TodoList extends Component {
	constructor(props) {
		super(props);
		// state componet durumu 
		this.state = {
			inputValue: '',
			list: []
		}

	}

	render() {
		return (
			<Fragment>
				<div>
					<input value={this.state.inputValue} onChange={this.handleTnputChange.bind(this)} />
					<button onClick={this.handlebtnClick.bind(this)}>Gönder</button>
				</div>
				<ul>
					{this.state.list.map((item, index) => {
						return <li key={index}
							onClick={this.handleItemDelete.bind(this, index)}>{item}
						</li>
					})}
				</ul>
			</Fragment >
		)
	}
	handleTnputChange(e) {
		// setState asıl oldığu state verileri değiştimek için kullandık
		this.setState({
			inputValue: e.target.value
		})
	}
	handlebtnClick() {
		this.setState({
			// list içindeki dizi verileri değiştirme 
			list: [...this.state.list, this.state.inputValue],
			inputValue: ''
		})
	}
	handleItemDelete(index) {
		//list dizisinin kopyasını aldık 
		const list = [...this.state.list];
		//list içindeki elemanlari indexleyip sildik 
		list.splice(index, 1);
		//sonra yeni list elemanlari değiştirdik 
		this.setState({
			list: list
		})
	}
}

export default TodoList;