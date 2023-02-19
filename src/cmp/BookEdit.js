import { useState } from "react";

function BookEdit({ book, onEdit, onSave }) {
    const [value, setValue] = useState(book.title);

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSumbit = (event) => {
        event.preventDefault();
        onEdit(book.id, value)
        onSave();
    }


    return <form onSubmit={handleSumbit} className="book-edit">
        <label>Book title:</label>
        <input className="input" value={value} onChange={handleChange} />
        <button className="button is-primary">
            Save
        </button>

    </form>
}

export default BookEdit;