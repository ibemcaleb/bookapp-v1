import { FaListUl, FaEdit, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Books = ({ books, handleDelete }) => {
    return (
        <div className="Main-Outlet">
            <h2>All Books</h2>
            {(books.length > 0) && 
                <table className="table">
                    <thead>
                        <tr>
                            <th>Book Title</th>
                            <th colSpan={3}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book.id}>
                                <td className="tdTitle">{book.title}</td>
                                <td className="tdView"><Link to={`book/${book.id}`} className='detailLink'><FaListUl title='Click to View Details' /></Link></td>
                                <td className="tdEdit"><Link to={`edit/${book.id}`} className='editLink'><FaEdit title='Click to Edit' /></Link></td>
                                <td className="tdDelete">
                                    <FaTrashAlt role="button" className='faButton' onClick={() => handleDelete(book.id)} title='Click to Delete' />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
            {!(books.length > 0) &&
                <p style={{marginTop: "30px"}}>No Books to display.</p>
            }
        </div>
    )
}

export default Books
