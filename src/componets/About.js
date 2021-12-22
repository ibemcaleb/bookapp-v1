const About = () => {
    return (
        <div className="Main-Outlet about-component">
            <h3>About Book Manager V1</h3>
            <p>
                Book Manager V1 is a React Js app. It is a CRUD app that demonstrates how to perform CRUD in React Js.
                It has all the features of a major CRUD application. The app is capable of performing:
            </p>
            <ul className="about-list">
                <li>Create a new book object.</li>
                <li>Read all collections of books in the array and displays them on the screen.</li>
                <li>View detail of a particular book using the book id.</li>
                <li>Edit/Update a book item and save back to the source.</li>
                <li>Delete a book item using the item id.</li>
            </ul>
            <p>The app demonstrates the use of</p>
            <ul className="about-list">
                <li>React function components</li>
                <li>React Hooks</li>
                <li>React Router Dom v6</li>
                <li>React Icons</li>
            </ul>
            <p>
                It uses the browser localStorage to persist the book object.
                The app is also responsive as the view changes on different view ports.
            </p>
            <h3>How to use the app</h3>
            <p>The home page displays a list of book titles if there are any, otherwise it displays a message that the list
            is empty. To add a new book to the list, click the Plus (+) Icon beside the header , a new form will open, fill 
            the form and click ADD button to add the new book details. On the Home page there are Icons/Buttons for performing 
            different CRUD operations. Hover your mouse cursor over the Icons/Buttons to show a tool tip of what they do. 
            Click on each of the Icons to perform the corresponding action.</p>
        </div>
    )
}

export default About
