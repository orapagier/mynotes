import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const newItemWithDate = `${newItem} - ${date} ${time}`; // add the date and time to the new item

    onSubmit(newItemWithDate);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Note</label>
        <div className="input-wrapper">
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
          <button className="btn">Add</button>
        </div>
      </div>
    </form>
  );
}
