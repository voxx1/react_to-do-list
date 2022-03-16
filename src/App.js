import { useState } from 'react';
import './App.css';
import ToDoInput from './ToDoInput'
import ToDoItems from './ToDoItems'


function App() {

  const [allToDo, setAllToDo] = useState([
    {
      id: 1,
      value: "Buy flowers for mom"
    },
    {
      id: 2,
      value: "Get some food for breakfast"
    },
    {
      id: 3,
      value: "Buy some milk"
    }
  ])

  const newInputHandler = enteredValue => {
    setAllToDo(prevToDo => {
      const updatedToDo = [...prevToDo]
      updatedToDo.push({ id: Math.random().toString(), value: enteredValue });
      return updatedToDo
    })
  }

  const deleteToDo = toDoId => {
    setAllToDo(prevToDo => {
      const updatedToDo = prevToDo.filter(item => item.id !== toDoId);
      return updatedToDo
    })
  }

  let content = <p className='empty--list'>There is nothing left on the list! :)</p>

  if (allToDo.length > 0) {
    content = <ToDoItems deleteHandler={deleteToDo} allItems={allToDo} />
  }

  return (
    <div className='main--content'>
      <ToDoInput allItems={allToDo} addInput={newInputHandler} />
      {content}
    </div>
  );
}

export default App;
