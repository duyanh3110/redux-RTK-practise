import React, { useState } from "react";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "../../redux/actions";
import Todo from "../Todo";
import { v4 as uuidv4 } from "uuid";
import { todoRemainingSelector } from "../../redux/selectors";
import todoSlice from "./todoSlice";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const dispatch = useDispatch();
  const todoList = useSelector(todoRemainingSelector);

  const handleAddButtonClick = () => {
    dispatch(
      todoSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );

    setTodoName("");
    setPriority("Medium");
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleSelectChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList?.map((task) => {
          return (
            <Todo
              key={task.id}
              name={task.name}
              priority={task.priority}
              completed={task.completed}
              id={task.id}
            />
          );
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input onChange={handleInputChange} />
          <Select defaultValue="Medium" onChange={handleSelectChange}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
