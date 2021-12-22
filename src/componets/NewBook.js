const NewBook = ({ newBook, handleAddOnChange, handleAddOnSubmit }) => {
    return (
        <div className="Main-Outlet">
            <h2>New Book</h2>
            <form className="NewBookForm" onSubmit={handleAddOnSubmit}>
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    required
                    autoFocus
                    id="title"
                    name="title"
                    placeholder="Enter Book Title"
                    value={newBook.title}
                    onChange={handleAddOnChange}
                />
                <br /><br />
                <label htmlFor="author">Author</label>
                <input 
                    type="text" 
                    required
                    id="author"
                    name="author"
                    placeholder="Enter Book Author"
                    value={newBook.author}
                    onChange={handleAddOnChange}
                />
                <br /><br />
                <label htmlFor="publisher">Publisher</label>
                <input 
                    type="text" 
                    required
                    id="publisher"
                    name="publisher"
                    placeholder="Enter Book Publisher"
                    value={newBook.publisher}
                    onChange={handleAddOnChange}
                />
                <br /><br />
                <label htmlFor="year">Year Published</label>
                <input 
                    type="text" 
                    required
                    id="year"
                    name="pubyear"
                    placeholder="Enter Year Published"
                    value={newBook.pubyear}
                    onChange={handleAddOnChange}
                />
                <br /><br />
                <label htmlFor="isbn">ISBN</label>
                <input 
                    type="text"
                    required 
                    id="isbn"
                    name="isbn"
                    placeholder="Enter Book ISBN"
                    value={newBook.isbn}
                    onChange={handleAddOnChange}
                />
                <br /><br />
                <button type="submit" className="AddButton">ADD</button>
            </form>
        </div>
    )
}

export default NewBook
