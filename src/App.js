import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [todoList, modifyList] = useState([]);

  const inputRef = useRef();

  const addClick = () => {
    const task = inputRef.current.value;
    const item = { complete: false, task };
    modifyList([...todoList, item]);
  };

  const taskClick = (index) => {
    const tempList = [...todoList]
    tempList[index].complete = !tempList[index].complete
    modifyList(tempList)
  };

  const deleteTask = (index) => {
    const tempList = [...todoList]
    tempList.splice(index, 1)
    modifyList(tempList)
  };

  console.log(todoList);
  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className = "todoListBox">
        <ul>
          {todoList.map((item, index) => {
            return (
              <div className = "item">
                <li
                  className={item.complete ? "done" : ""}
                  key={index}
                  onClick={() => taskClick(index)}
                >
                  {item.task}
                </li>
                <span onClick={() => deleteTask(index)}>X</span>
              </div>
            );
          })}
        </ul>
      </div>
      <div className = "inputAdd">
        <input ref={inputRef} Placeholder="Enter a task...."></input>
        <button onClick={addClick}>Add</button>
      </div>
    </div>
  );
}

export default App;
