import React, { Component } from 'react';
import propTypes from 'prop-types';
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }
  render() {
    const { content } = this.props;
    return (
      <div onClick={this.handleClick}>
        {content}
      </div>
    )
  }
  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
    //this.props.deleteItem(this.props.index);
  }
}
TodoItem.propTypes = {
  test: propTypes.string,
  content: propTypes.string,
  deleteItem: propTypes.func,
  index: propTypes.number
}
// defult değer 
TodoItem.defaultProps = {
  // test: 'hello word '
}
export default TodoItem;