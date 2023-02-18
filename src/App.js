import { useState } from "react";
import BookCreate from "./cmp/BookCreate";
import BookEdit from "./cmp/BookEdit";
import BookList from "./cmp/BookList";
import BookShow from "./cmp/BookShow";

function App() {
    const [books, setBooks] = useState([]);


    const createBook = (title) => {
        const updateBooks = [title, ...books];
        setBooks(updateBooks)

    }
    const renderBooks = books.map((book, index) => {
        return <li key={index}>{book}</li>
    })


    return <div>
        <BookCreate onCreate={createBook} />
        <ul>
            {renderBooks}
        </ul>
    </div>

}

export default App;