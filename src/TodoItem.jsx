import { useState } from "react"

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, editTodo }) {
  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)

  function handleSave() {
    editTodo(id, newTitle)
    setEditing(false)
  }

  return (
    <li>
      {!editing && (
        <>
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            {title}
          </label>
          <button onClick={() => deleteTodo(id)} className="btn btn-danger">
            Delete
          </button>
          <button onClick={() => setEditing(true)} className="btn btn-primary">
            Edit
          </button>
        </>
      )}
      {editing && (
        <>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            type="text"
          />
          <button onClick={handleSave} className="btn btn-success">
            Save
          </button>
          <button onClick={() => setEditing(false)} className="btn btn-secondary">
            Cancel
          </button>
        </>
      )}
    </li>
  )
}
