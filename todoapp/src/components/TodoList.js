import React, { Component } from "react";
import { connect } from "react-redux";

import { Alert, Button } from "reactstrap";
import { removeTodo, markDone } from "../actions";

class TodoList extends Component {
  markDeleted = (itemName, e) => {
    // console.log("button");
    this.props.removeTodo(itemName);
  };

  markDone = (itemName, e) => {
    this.props.markDone(itemName);
  };
  render() {
    const myStyle = {
      verticalAlign: "middle",
      lineHeight: "normal"
    };
    return this.props.todoList.map(value => {
      return (
        <Alert
          key={value.itemName}
          color="secondary"
          style={{ lineHeight: "38px" }}
        >
          <span
            style={
              value.status !== false ? { textDecoration: "line-through" } : {}
            }
          >
            {value.itemName}
          </span>
          <Button
            onClick={e => this.markDeleted(value.itemName, e)}
            size="sm"
            className="float-right m-2"
            style={myStyle}
          >
            X
          </Button>
          <Button
            onClick={e => this.markDone(value.itemName, e)}
            size="sm"
            className="float-right m-2"
            style={myStyle}
          >
            {value.status !== false ? 'Undo' : 'Done'}
          </Button>
        </Alert>
      );
    });
  }
}

const mapStateToProps = state => {
  console.clear();
  console.log(state);
  return {
    todoList: state.todoApp.todoList
  };
};

export default connect(mapStateToProps, { removeTodo, markDone })(TodoList);
