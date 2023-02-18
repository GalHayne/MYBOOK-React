import BookShow from "./BookShow"

function BookList({ books }) {
    console.log(books);
    const renderBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} />
    })
    console.log({ renderBooks });
    return <div className="book-list">
        {renderBooks}
    </div>
}

export default BookList;