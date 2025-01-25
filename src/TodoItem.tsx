import './TodoMain.css'
import { useState,useRef } from 'react';

interface ItemType {
  id: number;
  value: string;
  done: boolean;
}

interface TodoItemProps {
  item: ItemType;
  onDelete: (id:number) => void;
}


export const TodoItem: React.FC<TodoItemProps> = ({ item, onDelete }) => {
  
  const listItemRef = useRef<HTMLLIElement>(null);
  const [isDone, setIsDone] = useState(item.done);

  // Обработчик для выполнения/отмены выполнения задания
  const handleClickDone = () => {
    console.log(1);
    setIsDone(prevState => {
      const newState = !prevState;
      if (newState) {
        listItemRef.current?.classList.add('done');
      } else {
        listItemRef.current?.classList.remove('done');
      }
      return newState;
    });
  };

  // Обработчик для удаления задания
  const handleDelete = () => {
    onDelete(item.id); 
  };

  return (
    <li ref={listItemRef} className='deal'>
      {item.value}
      <button onClick={handleClickDone} className='complete-btn'>Done</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
