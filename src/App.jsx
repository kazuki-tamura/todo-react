import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { UndoneTodo } from "./components/UndoneTodo";
import { DoneTodo } from "./components/DoneTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [undoneTodos, setUndoneTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  // input text
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  // add todo
  const onClickAddTodo = () => {
    if (todoText === "") return; // do nothing

    if (undoneTodos.length >= 5) {
      alert("タスクを消化してください！");
      return;
    }

    const newTodo = [...undoneTodos, todoText];
    setUndoneTodos(newTodo);
    setTodoText("");
  };

  // 削除ボタン
  const onClickDelete = (index) => {
    const newTodos = [...undoneTodos];
    newTodos.splice(index, 1);
    setUndoneTodos(newTodos);
  };

  // 完了ボタン
  const onClickDone = (index) => {
    const newDoneTodos = [...doneTodos, undoneTodos[index]];
    setDoneTodos(newDoneTodos);

    onClickDelete(index);
  };

  // 戻すボタン
  const onClickBack = (index) => {
    const newUndoneTodos = [...undoneTodos, doneTodos[index]];
    setUndoneTodos(newUndoneTodos);

    const newDoneTodos = [...doneTodos];
    newDoneTodos.splice(index, 1);
    setDoneTodos(newDoneTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAddTodo}
      />
      <UndoneTodo
        undoneTodos={undoneTodos}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      <DoneTodo doneTodos={doneTodos} onClickBack={onClickBack} />
    </>
  );
};
