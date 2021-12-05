import React from 'react'
import { useState, useEffect } from 'react'
import APIService from './APIService'
import {useCookies} from 'react-cookie'

function Form(props) {
    const [Name, setName] = useState(props.book.Name)
    const [Author, setAuthor] = useState(props.book.Author)
    const [Price, setPrice] = useState(props.book.Price)
    const [token , setToken] = useCookies(['mytoken'])


    useEffect(() => {
        setName(props.book.Name)
        setAuthor(props.book.Author)
        setPrice(props.book.Price)
    }, [props.book])



    const updateBook = () => {
        APIService.updateBook(props.book.id, { Name, Author, Price }, token['mytoken'])
            .then(resp => props.updatedBook(resp))
    }

    const insertBook = () => {
        APIService.InsertBook({ Name, Author, Price },token['mytoken'])
            .then(resp => props.insertedBook(resp))
    }
    return (
        <>
        <div>
            {props.book ? (
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Please Enter The Name of Book"
                        value={Name} onChange={e => setName(e.target.value)} />


                    <label htmlFor="Author" className="form-label">Author</label>
                    <input type="text" className="form-control" placeholder="Please Enter Author Name"
                        value={Author} onChange={e => setAuthor(e.target.value)} />

                    
                    <label htmlFor="Price" className="form-label">Price</label>
                    <input type="number" className="form-control" placeholder="Please Enter Price"
                        value={Price} onChange={e => setPrice(e.target.value)} />



                    {props.book.id ? <button onClick={updateBook} className="btn btn-success">Update Article</button> : <button onClick={insertBook} className="btn btn-success">InsertBook</button>}



                </div>
            ) : null}
        </div>
        </>
    )
}

export default Form
