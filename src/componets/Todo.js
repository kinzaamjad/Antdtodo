import React, { useState } from 'react';
import { Button, Input, List } from 'antd';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto' }}>
      <h1>Todo App</h1>
      <Input
        placeholder="Enter a todo"
        value={inputValue}
        onChange={handleInputChange}
        style={{ marginBottom: '10px' }}
      />
      <Button type="primary" onClick={handleAddTodo} style={{ marginBottom: '10px' }}>
        Add Todo
      </Button>
      <List
        bordered
        dataSource={todos}
        renderItem={(todo, index) => (
          <List.Item
            actions={[
              <Button
                type="danger"
                size="small"
                onClick={() => handleDeleteTodo(index)}
                key={index}
              >
                Delete
              </Button>,
              

            ]}
            






          >

            {todo}
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoApp;
