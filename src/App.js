import { useState } from "react";
import BookCreate from "./cmp/BookCreate";
import BookList from "./cmp/BookList";
// import BookEdit from "./cmp/BookEdit";
// import BookShow from "./cmp/BookShow";

function App() {
    const [books, setBooks] = useState([]);


    const createBook = (title) => {

        const newBook = [
            ...books,
            { id: Math.random() * 9999, title }
        ];
        setBooks(newBook)

    }
    const renderBooks = books.map((book, index) => {
        return <li key={index}>{book}</li>
    })


    return <div className="app">
        <BookList books={books} />
        <BookCreate onCreate={createBook} />
    </div>

}

export default App;