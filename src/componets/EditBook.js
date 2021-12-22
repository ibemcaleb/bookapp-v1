import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditBook = ({ books, editedBook, setEditedBook, handleEditedOnChange, handleEditedOnSubmit }) => {
    const { id } = useParams()
    const book = books.find(book => (book.id).toString() === id)

    useEffect(() => {
        if (book) {
            setEditedBook({
                title: book.title,
                author: book.author,
                publisher: book.publisher,
                pubyear: book.pubyear,
                isbn: book.isbn
            })
        }
    }, [book, setEditedBook])

    return (
        <div className="Main-Outlet">
            <h2>Edit Book</h2>
            <form className="NewBookForm" onSubmit={e => e.preventDefault()}>
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    required
                    id="title"
                    name="title"
                    placeholder="Enter Book Title"
                    value={editedBook.title}
                    onChange={handleEditedOnChange}
                />
                <br /><br />
                <label htmlFor="author">Author</label>
                <input 
                    type="text" 
                    required
                    id="author"
                    name="author"
                    placeholder="Enter Book Author"
                    value={editedBook.author}
                    onChange={handleEditedOnChange}
                />
                <br /><br />
                <label htmlFor="publisher">Publisher</label>
                <input 
                    type="text" 
                    required
                    id="publisher"
                    name="publisher"
                    placeholder="Enter Book Publisher"
                    value={editedBook.publisher}
                    onChange={handleEditedOnChange}
                />
                <br /><br />
                <label htmlFor="year">Year Published</label>
                <input 
                    type="text" 
                    required
                    id="year"
                    name="pubyear"
                    placeholder="Enter Year Published"
                    value={editedBook.pubyear}
                    onChange={handleEditedOnChange}
                />
                <br /><br />
                <label htmlFor="isbn">ISBN</label>
                <input 
                    type="text"
                    required 
                    id="isbn"
                    name="isbn"
                    placeholder="Enter Book ISBN"
                    value={editedBook.isbn}
                    onChange={handleEditedOnChange}
                />
                <br /><br />
                <button className="AddButton" onClick={() => handleEditedOnSubmit(book.id)}>Save</button>
            </form>
        </div>
    )
}

export default EditBook
