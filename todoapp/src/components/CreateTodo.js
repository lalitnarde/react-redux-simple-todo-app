import React, { Component } from "react";
import { connect } from "react-redux";

import { Col, Row, Form, FormGroup, Input, Button, Alert } from "reactstrap";
import { addTodo } from "../actions";

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: ""
    };
  }
  handleOnChange = e => {
    e.preventDefault();
    this.setState({
      todoItem: e.target.value
    });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todoItem);
    this.setState({
      todoItem: ""
    });
  };
  renderErrorMsg() {
    if (this.props.errorMsg !== "") {
      return <Alert color="danger">{this.props.errorMsg}</Alert>;
    } else {
      return "";
    }
  }
  render() {
    return (
      <Form onSubmit={this.handleOnSubmit}>
        <Row form>
          <Col sm="8">
            <FormGroup>
              <Input
                name="inputTodo"
                value={this.state.todoItem}
                onChange={this.handleOnChange}
              />
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <Button>Add</Button>
            </FormGroup>
          </Col>
        </Row>
        {this.renderErrorMsg()}
      </Form>
    );
  }
}

const mapStateToProps = state => {
  // console.clear();
  // console.log(state);
  return {
    errorMsg: state.todoApp.errorMsg
  };
};

export default connect(mapStateToProps, { addTodo })(CreateTodo);
