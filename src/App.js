import { useEffect } from "react";
import BookCreate from "./cmp/BookCreate";
import BookList from "./cmp/BookList";
import useBooksContext from "./hooks/use-books-context";

function App() {
    const { fetchBooks } = useBooksContext();

    useEffect(() => {
        fetchBooks()
    }, []);


    return <div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
    </div>

}

export default App;