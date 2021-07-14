import React from "react";

export const DoneTodo = (props) => {
  const { doneTodos, onClickBack } = props;
  return (
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
  );
};
