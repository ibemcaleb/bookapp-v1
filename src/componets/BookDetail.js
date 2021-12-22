import { Link, useParams } from "react-router-dom"
import { FaBackward } from "react-icons/fa"

const BookDetail = ({ books }) => {
    const { id } = useParams()
    const bookDetail = books.find(book => (book.id).toString() === id)
    return (
        <div className="Main-Outlet">
            <h2>Book {bookDetail.id} Details</h2>
            <table className="DetailTable">
                <tbody>
                    <tr>
                        <td>Title:</td>
                        <td>{bookDetail.title}</td>
                    </tr>
                    <tr>
                        <td>Author:</td>
                        <td>{bookDetail.author}</td>
                    </tr>
                    <tr>
                        <td>Publisher:</td>
                        <td>{bookDetail.publisher}</td>
                    </tr>
                    <tr>
                        <td>Bublished Year:</td>
                        <td>{bookDetail.pubyear}</td>
                    </tr>
                    <tr>
                        <td>ISBN:</td>
                        <td>{bookDetail.isbn}</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/"><FaBackward className="backButton" /></Link>
        </div>
    )
}

export default BookDetail
