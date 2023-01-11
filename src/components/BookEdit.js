import {useState} from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookEdit( { book, onSubmit }) {
    const [title, setTitle] = useState(book.title);
    const { editBookById } = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id, title);
    };

    return (
        <form className="book-edit">
            <label>Title</label>
            <input className="input" onChange={handleChange} value={title}/>
            <button className="button is-primary" onClick={handleSubmit}>
                Save
            </button>
        </form>
    )
}

export default BookEdit;