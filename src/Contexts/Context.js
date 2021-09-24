import React, {useState, createContext} from 'react';


export const CustomContext = createContext();

export const Context = (props) => {
    const [books, setBook] = useState([
        {id:1, title: 'JS'},
        {id:2, title: 'JS'},
        {id:3, title: 'JS'}
    ]);

    const addBook = (book) => {
        setBook([book, ...books]);
    }

    const removeBook = (id) => {
        books.filter(book => book.id !== id);
    }

    const values = {
        books,
        addBook,
        removeBook
    }

    return <CustomContext.Provider value={values}>
        {props.children}
    </CustomContext.Provider>
}
