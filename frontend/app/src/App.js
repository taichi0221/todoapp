import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App(){
  const [todos, setTodos] = useState([]);  
  //useState 変数の管理 無駄な再レンダリングを防ぐ
  //setTodos todosの中身を変更したり更新したりできる

  const todoNameRef = useRef(); //inputのrefから要素を取ってきている

  const handleAddTodo =() => {
    //タスクを追加する。
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false }]; //prevTodos 前のタスクの状態に対して更新していく
    });
    todoNameRef.current.value = null;
  };
  
  const toggleTodo = (id) => { //idでどのタスクをチェックするか判断させる
    const newTodos = [...todos]; //todosをそのまま変更するのはよくない、一度他の変数に代入する
    const todo = newTodos.find((todo) => todo.id === id); //右側のidがtoggleTodo = (id)に対応。それと等しいtodo.idを探してきてtodoに代入
    todo.completed = !todo.completed; //todo.completedを反転させる
    setTodos(newTodos); //変更を保存してやる
  };

  return (
  <div>
    <TodoList todos={todos} toggleTodo={toggleTodo} />
    <input type="text" ref={todoNameRef} />
    <button onClick={handleAddTodo}>タスクを追加</button>
    <button>完了したタスクの削除</button>
    <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
  </div>
  );
}

export default App;