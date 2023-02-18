import { useState } from "react";
import BookCreate from "./cmp/BookCreate";
import BookEdit from "./cmp/BookEdit";
import BookList from "./cmp/BookList";
import BookShow from "./cmp/BookShow";

function App() {
    const [books, setBooks] = useState([]);


    const createBook = (title) => {
        console.log('Needc to add book with:', title);
    }


    return <div>
        <BookCreate onCreate={createBook} />
    </div>

}

export default App;