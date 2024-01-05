import { useState } from 'react'
import TodoList from './TodoList';


function App() {

  const [inputList, setInputList] = useState("");
  const [item, setItem] = useState([]);

  const addItem = (event) => {
    setInputList(event.target.value);
  };
  const itemAddEvent = () => {
    setItem((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItem = (id) => {
    setItem((oldItems) => {
      return oldItems.filter((arrElem, i) => {
        return i !== id;
      })
    })
  };

  return (
    <>
     <div className="main">
      <div className="center-div">
        <div className="title"><h1>TO DO LIST</h1></div>

        <div className="input">
          <input type="text" placeholder='Add Item' value={inputList} onChange={addItem}  />

          <button onClick={itemAddEvent}>+</button>
        </div>

        <div className="list-item">
          <ol>
            {/* <li>{inputList}</li> */}

            {
              item.map((val , i) => {
                return <TodoList text={val} key={i} id={i} 
                onSelect={deleteItem} />
              })
            }
          </ol>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
