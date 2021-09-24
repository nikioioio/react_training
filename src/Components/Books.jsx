import React, {useContext} from 'react';
import {CustomContext} from '../Contexts/Context'


export const Books = () => {

    const { books } = useContext(CustomContext)

    return (
        <div>
            {
                books.map(book => {
                    return (
                        <h1 key={book.id}>{book.title}</h1>
                    )
                })
            }
        </div>
    )

}