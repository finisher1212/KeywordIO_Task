import React from 'react'
import APIService from './APIService'
import { useCookies } from 'react-cookie';


function GetList(props) {

    const[token] = useCookies(['mytoken'])

    const {bookList} = props;


    const editBtn = (book)=>{
      props.editBtn(book)
    }

    const deleteBtn=(book)=>{
      APIService.DeleteBook(book.id, token['mytoken'])
      .then(()=>props.deleteBtn(book))
      .catch(error=>console.log(error))
      
    }


    return (
        <>


<table className="table table-dark">
  <thead>

    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Author</th>
      <th scope="col">Price</th>
      <th scope="col">*</th>
      <th scope="col">*</th>
    </tr>
  </thead>

  <tbody>
  {bookList && bookList.map((book)=>{

    return(
      <>
      
    <tr  key={book.id}>

      <td scope="row" >{book.id}</td>
      <td>{book.Name}</td>
      <td>{book.Author}</td>
      <td>{book.Price}</td>
      <td><button onClick={()=>{editBtn(book)}} className="btn btn-primary">Update</button></td>
      <td><button onClick={()=>{deleteBtn(book)}} className="btn btn-danger">Delete</button></td>
    </tr>
     
    </>
   ) })}

  </tbody>
</table>

            
</>
    )
}

export default GetList
