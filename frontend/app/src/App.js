import { useState, useRef } from "react";
import TodoList from "./TodoList";

function App(){
  const [todos, setTodos] = useState([{id: 1, name: "Todo1", completed: false}
  ])  
  //useState 変数の管理 無駄な再レンダリングを防ぐ
  //setTodos todosの中身を変更したり更新したりできる

  const todoNameRef = useRef(); //inputのrefから要素を取ってきている

  const handleAddTodo =() => {
    //タスクを追加する。
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, {id: 1, name: name, completed: false }]; //prevTodos 前のタスクの状態に対して更新していく
    });
  };
  

  return (
  <div>
    <TodoList todos={todos} />
    <input type="text" ref={todoNameRef} />
    <button onClick={handleAddTodo}>タスクを追加</button>
    <button>完了したタスクの削除</button>
    <div>残りのタスク:0</div>
  </div>
  );
}

export default App;