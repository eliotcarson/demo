'use client'
import TodoList from '@/components/Todo-list';
import Input from '../components/Input'

export default function Home() {
  return (
    <main>
      <Input />
      <TodoList />
    </main>
  );
}
