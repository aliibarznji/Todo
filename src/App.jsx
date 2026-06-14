import { useForm } from "react-hook-form";
import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);


  const {
    register,   
    handleSubmit, 
    reset,       
    formState: { errors }, 
  } = useForm();

  function onSubmit(data) {
    const newTask = { id: Date.now(), text: data.task, done: false };
    setTasks([...tasks, newTask]);
    reset(); 
  }

  function toggleTask(id) {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  function deleteTask(id) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  
  return (
    <div>
      <h2>To-do List</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Add a new task..."
          {...register("task", { required: "Task cannot be empty" })}
        />
        <button type="submit">Add</button>
      </form>

      {errors.task && <p style={{ color: "red" }}>{errors.task.message}</p>}
          
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
