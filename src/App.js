import axios from "axios";
import { useEffect, useState } from "react";
import BookCreate from "./cmp/BookCreate";
import BookList from "./cmp/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    }

    useEffect(() => {
        fetchBooks()
    }, [])


    const editBookById = async (id, newTitle) => {

        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
        });

        const updatedBook = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data }
            }
            return book;
        })

        setBooks(updatedBook);
    }

    const deleteBookById = async (id) => {

        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };


    const createBook = async (title) => {

        //####books from DB####
        const response = await axios.post('http://localhost:3001/books', {
            title,
        });

        const updatedBooks = [
            ...books,
            response.data,
        ]
        setBooks(updatedBooks);
        // ###########################################################3####################

        //###books from local####
        // setBooks(response.data);

        // const newBook = [
        //     ...books,
        //     { id: Math.floor(Math.random() * 9999), title }
        // ];
        // setBooks(newBook)

    };


    return <div className="app">
        <h1>Reading List</h1>
        <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
        <BookCreate onCreate={createBook} />
    </div>

}

export default App;