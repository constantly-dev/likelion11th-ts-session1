import styled from 'styled-components';
import { useState } from 'react';
import Todo from './Todo';
const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [plusTodo, setPlusTodo] = useState<string>('');

  const PlusTodo: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, plusTodo]);
    console.log(todos);
    setPlusTodo('');
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPlusTodo(e.target.value);
  };

  return (
    <div>
      <Title>ToDoList</Title>
      <Todo props={todos} />
      <TodoForm>
        <TodoInput
          value={plusTodo}
          placeholder="할 일을 입력해 주세요"
          onChange={handleChange}
        ></TodoInput>
        <TodoButton onClick={PlusTodo}>등록하기</TodoButton>
      </TodoForm>
    </div>
  );
};

const Title = styled.h1``;
const TodoForm = styled.form``;
const TodoInput = styled.input``;
const TodoButton = styled.button``;

export default TodoList;
