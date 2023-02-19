import { useState } from "react";
import BookCreate from "./cmp/BookCreate";
import BookList from "./cmp/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const editBookById = (id, newTitle) => {
        const updatedBook = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle }
            }
            return book;
        })

        setBooks(updatedBook);
    }

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };


    const createBook = (title) => {

        const newBook = [
            ...books,
            { id: Math.floor(Math.random() * 9999), title }
        ];
        setBooks(newBook)

    };


    return <div className="app">
        <h1>Reading List</h1>
        <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
        <BookCreate onCreate={createBook} />
    </div>

}

export default App;