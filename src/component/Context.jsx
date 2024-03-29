import React, { createContext, useContext, useEffect, useState } from 'react'

export const TodoContext=createContext()
export const TodoProvider=({children})=> {
  const [todos,setTodos]=useState([])
  useEffect(() => {
    const storedTodos =localStorage.getItem('todos');
    if(storedTodos){
      setTodos(JSON.parse(storedTodos))
    }
  }, []);
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);
  const addTodo=(text)=>{
    const newTodos={id:Date.now(),text,completed:false};
    setTodos([...todos,newTodos]);
  }
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  const deleteTodo=(id)=>{
    const remaingTodos=todos.filter((todo)=>todo.id!==id)
    setTodos(remaingTodos)
  }
  return (
    <TodoContext.Provider value={{todos,addTodo,toggleComplete,deleteTodo}}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodos = () => useContext(TodoContext);
