import React, {useEffect, useState} from "react";
import GetList from "./Component/GetList";
import {useCookies} from 'react-cookie'
import { useHistory } from "react-router";
import Form from "./Component/form";

function Application() {

    const[bookList, setbookList] = useState([]);
    const [token, setToken, removeToken  ] = useCookies(['mytoken'])
    const [editBook, setEditBook] = useState(null)
    let history = useHistory()
    // useEffect(()=>{
    //     async function fetchbookList(){
    //         try{
    //             const requestUrl = 'http://127.0.0.1:8000/app/books/';
    //             const response = await fetch(requestUrl);
    //             const responseJSON = await response.json();
    //             console.log(responseJSON)
    //             setbookList(responseJSON);

    //         }catch{

    //         }
    //     }
    //     fetchbookList();
    // },[]);

    // return (
    //     <div className="App">
    //         <GetList bookList={bookList}/>
    //     </div>
    // )


    useEffect(() => {
        fetch(' http://127.0.0.1:8000/app/books/', {
          'method': 'GET',
    
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token['mytoken']}`,
          }
        })
          .then(resp => resp.json())
          .then(resp => setbookList(resp))
          .catch(error => console.log(error))
      }, [])

      useEffect(() => {
        if (!token['mytoken']) {
            history.push('/')
        }
    }, [token])

    const editBtn = (book) =>{
        setEditBook(book)
    }

    const updatedBook = (book)=>{
        const new_book = bookList.map((mybook)=>{
            if (mybook.id === book.id){
                return book;
            }
            else{
                return mybook;
            }
            
        }) 
        setbookList(new_book)
    }

    const bookform = ()=>{
        setEditBook({Name:'',Author:'',Price:''})
    }

    const insertedBook = (book)=>{
        const new_book = [...bookList,book]
        setbookList(new_book)
    }

    const deleteBtn = (book)=>{
        const new_books = bookList.filter((mybook)=>{
            if (mybook.id === book.id){
                return false
            }
            return true;
        })
        setbookList(new_books)
    }


    const logoutBtn=()=>{
        removeToken(['mytoken'])
    }




    return(
        <div className="App">

      <div className="row">
      <div className="col">


      
      <h1> LIBRARY</h1>



      <br/>
      </div>

      <div className="col">
      <button onClick={bookform} className = "btn btn-primary">Insert Book</button>
      </div>

      <div className="col">
      <button onClick={logoutBtn} className = "btn btn-primary">LogOut</button>
      </div>


      <GetList bookList={bookList} editBtn = {editBtn} deleteBtn={deleteBtn}/>



      {editBook ? <Form book = {editBook} updatedBook = {updatedBook} insertedBook={insertedBook}  /> : null}
      </div>
      
    </div>
    );
}

export default Application
