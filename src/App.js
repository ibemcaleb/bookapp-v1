import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from "uuid"
import Layout from "./componets/Layout";
import Books from "./componets/Books";
import NewBook from "./componets/NewBook";
import BookDetail from "./componets/BookDetail";
import EditBook from "./componets/EditBook";
import Missing from "./componets/Missing";
import About from './componets/About';

function App() {
  // const bookList = [
  //   {
  //     id: 1,
  //     title: "The road to bar beach",
  //     author: "Ola Rotimi",
  //     publisher: "Great elites publishers ltd",
  //     pubyear: "1945",
  //     isbn: "123675"
  //   },
  //   {
  //     id: 2,
  //     title: "The drunken master",
  //     author: "Vincent Olatunde",
  //     publisher: "Emma first publishers ltd",
  //     pubyear: "1998",
  //     isbn: "874234"
  //   },
  //   {
  //     id: 3,
  //     title: "The gods are not to blame",
  //     author: "Craig Alphonsus",
  //     publisher: "Independent publishers Nigeria ltd",
  //     pubyear: "2005",
  //     isbn: "431980"
  //   },
  // ]

  const initialNewBook = {
    title: "",
    author: "",
    publisher: "",
    pubyear: "",
    isbn: ""
  }

  const initialEditedBook = {
    title: "",
    author: "",
    publisher: "",
    pubyear: "",
    isbn: ""
  }

  const uuid = uuidv4()
  const navigate = useNavigate()
  const year = new Date().getFullYear() 
  const [barIcon, setBarIcon] = useState(true)
  const [timesIcon, setTimesIcon] = useState(false)
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem("booklist")) || [])
  const [newBook, setNewBook] = useState(initialNewBook)
  const [editedBook, setEditedBook] = useState(initialEditedBook)

  const handleMobileMenu = () => {
      setBarIcon(!barIcon)
      setTimesIcon(!timesIcon)
      document.querySelector("nav").classList.toggle("show")
  }

  const handleDelete = id => {
    const allbooks = books.filter(book => book.id !== id)
    setBooks(allbooks)
    localStorage.setItem("booklist", JSON.stringify(allbooks))
  }

  const handleAddOnChange = e => {
    const { name, value } = e.target
    setNewBook({...newBook, [name]: value})
  }

  const handleAddOnSubmit = e => {
      e.preventDefault()
      if (!newBook) return
      newBook.id = uuid
      const allBooks =[newBook, ...books]
      setBooks(allBooks)
      localStorage.setItem("booklist", JSON.stringify(allBooks))
      setNewBook(initialNewBook)
      navigate("/")
  }

  const handleEditedOnChange = e => {
    const { name, value } = e.target
    setEditedBook({...editedBook, [name]: value})
  }

  const handleEditedOnSubmit = id => {
    editedBook.id = uuid
    const editedBookReady = {
      id,  
      title: editedBook.title,
      author: editedBook.author,
      publisher: editedBook.publisher,
      pubyear: editedBook.pubyear,
      isbn: editedBook.isbn
    }
    const updatedBook = books.map(book => book.id === id ? {...editedBookReady} : book)
    setBooks(updatedBook)
    localStorage.setItem("booklist", JSON.stringify(updatedBook))
    setEditedBook(initialNewBook)
    navigate("/")
}

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout 
          year={year}
          barIcon={barIcon}
          timesIcon={timesIcon}
          handleMobileMenu={handleMobileMenu}
        />}>
          <Route index element={<Books 
            books={books}
            handleDelete={handleDelete}
          />} />
          <Route path="book">
            {/* <Route index element={<Books />} /> */}
            <Route path=":id" element={<BookDetail 
              books={books}
            />} />
          </Route>
          <Route path="edit">
            {/* <Route index element={<Books />} /> */}
            <Route path=":id" element={<EditBook 
              books={books}
              uuid={uuid}
              editedBook={editedBook}
              setEditedBook={setEditedBook}
              handleEditedOnChange={handleEditedOnChange}
              handleEditedOnSubmit={handleEditedOnSubmit}
            />} />
          </Route> 
          <Route path="create" element={<NewBook 
            newBook={newBook}
            handleAddOnChange={handleAddOnChange}
            handleAddOnSubmit={handleAddOnSubmit}
          />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
        
        
       
      </Routes>
    </div>
  );
}

export default App;
