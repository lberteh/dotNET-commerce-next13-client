import Head from 'next/head';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos: Todo[] = await res.json();
  return todos;
}

export default async function Home() {
  const todos = await getTodos();
  return (
    <div>
      <h1>HOME page</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
