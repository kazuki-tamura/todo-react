import React, { useState } from "react";
import "./styles.css";

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
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAddTodo}>追加</button>
      </div>
      <div className="undone-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {undoneTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickDone(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="done-area">
        <p className="title">完了したTODO</p>
        <ul>
          {doneTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
