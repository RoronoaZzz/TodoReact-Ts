import  { useState } from "react"
import {TodoList} from './TodoList';

interface itemType {
  id: number;
  value: string;
  done: boolean;
}


export const TodoForm = () => {
  const [newItem, setNewItem] = useState<string>('')
  const [items, setItem] = useState<itemType[]>([]);


//функция создания дела

  function addItem() {
    if(!newItem) {
      alert('Введите название дела!')
      return
    } 
    
    console.log(1);

    const array = new Uint32Array(1);
    const uniqueId = crypto.getRandomValues(array)[0];

    const item: itemType = {
      id: uniqueId, 
      value: newItem,
      done: false,
    }

    setItem(oldList => [...oldList,item])
    console.log(items);
    setNewItem('')
  }


  const onDelete = (id: number) => {
    setItem(prevItems => prevItems.filter(item => item.id !== id));
    console.log(1);
  };
  
 
  

  return (
    <div>
    <form action="/submit_form" method="post" className="myForm" onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Создать дело" value={newItem} onChange={e => setNewItem(e.target.value)} />
      <button onClick={addItem}>Подтвердить</button>
    </form>
          <TodoList onDeleteItem={onDelete} array={items} />
    </div>
  )
}

