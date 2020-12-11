import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // state componet durumu 
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleTnputChange = this.handleTnputChange.bind(this);
    this.handlebtnClick = this.handlebtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        {/* bu rası  */}
        <div>
          <label htmlFor="inserArea" >İçerik Ekleyin</label>
          <input id="inserArea" className='input' value={this.state.inputValue} onChange={this.handleTnputChange} />
          <button onClick={this.handlebtnClick}>Gönder</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment >
    )
  }


  getTodoItem() {

    return this.state.list.map((item, index) => {
      return (

        <TodoItem key={index} content={item} index={index} deleteItem={this.handleItemDelete} />


      )
    })
  }

  handleTnputChange(e) {
    const value = e.target.value;
    // setState asıl oldığu state verileri değiştimek için kullandık
    this.setState(() => ({
      inputValue: value
    }));
  }
  handlebtnClick() {
    this.setState((provState) => ({
      list: [...provState.list, provState.inputValue],
      inputValue: ''
    }));
  }
  handleItemDelete(index) {
    this.setState((prevState) => {
      //list dizisinin kopyasını aldık 
      const list = [...prevState.list];
      //list içindeki elemanlari indexleyip sildik 
      list.splice(index, 1);
      //sonra yeni list elemanlari değiştirdik  
      return { list }
    })

  }
}

export default TodoList; 