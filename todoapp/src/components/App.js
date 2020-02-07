import React from "react";
import { Container, Row, Col } from "reactstrap";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

const App = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="6">
          <CreateTodo />
        </Col>
        <Col sm="6">
          <TodoList />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
