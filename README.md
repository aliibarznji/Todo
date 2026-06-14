# Todo List With `useForm`

This is a beginner React todo app that uses `useForm` from `react-hook-form`.

## Run It

```bash
npm install
npm run dev
```

## Study Order

1. `useState([])` stores the todo list.
2. `useForm()` creates form helpers.
3. `register('todoText')` connects the input to the form.
4. `handleSubmit(addTodo)` runs validation, then calls `addTodo`.
5. `reset()` clears the input after a todo is added.

## Main `useForm` Code

```jsx
const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm({
  defaultValues: {
    todoText: '',
  },
})
```

The input uses `register`:

```jsx
{...register('todoText', {
  required: 'Please write a task.',
  validate: (value) => value.trim().length > 0 || 'Please write a task.',
})}
```

The form uses `handleSubmit`:

```jsx
<form onSubmit={handleSubmit(addTodo)}>
```
