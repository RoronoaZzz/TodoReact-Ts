

import './TodoMain.css';
import { TodoItem } from './TodoItem';
import React from 'react';

interface TodoType {
  array: Array<{ value: string; id: number; done: boolean; }>;
  onDeleteItem : (id:number) => void;
}

export const TodoList: React.FC<TodoType> = ({ array, onDeleteItem }) => {
  return (
    <ul>
      {array.map((item) => (
        <TodoItem key={item.id} item={item} onDelete={onDeleteItem} /> 
      ))}
    </ul>
  );
}
