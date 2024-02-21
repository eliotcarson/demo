import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface TodoListProps {
  handleEdit: ({ title, id }: { title: string; id: string }) => void;
}

interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
  updatedAt: string;
}

const TodoList: React.FC<TodoListProps> = ({ handleEdit }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("/api/todo/create");
        if (!response.ok) {
          throw new Error(`Failed to fetch items: ${response.status}`);
        }
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error(`Error fetching items: ${error.message}`);
        toast.error("Unable to fetch todos at this time");
      }
    };

    fetchTodos();
  }, []);

  return (
    <ul className="w-full rounded-sm border p-3 space-y-2">
      {todos.map((todo) => (
        <div key={todo.id}>
          <div>Title: {todo.title}</div>
          <div>Completed: {todo.isCompleted ? "Yes" : "No"}</div>
          <div>Updated At: {todo.updatedAt}</div>
          {/* You can place edit button or other actions here */}
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
