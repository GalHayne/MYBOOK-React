import { useState } from "react";

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        console.log("tomer-branch");
        setTitle(event.target.value);
    }

    const handleSumbit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('')
    }


    return <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSumbit}>
            <label>Title</label>
            <input className="input" placeholder="Enter the name of book:" onChange={handleChange} value={title} />
            <button className="button">Create!</button>
        </form>
    </div>
}

export default BookCreate;