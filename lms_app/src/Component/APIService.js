

export default class APIService{

    static RegisterUser(body){
        return fetch(`http://127.0.0.1:8000/app/users/`,{
            'method':'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(body)
        }).then(resp=>resp.json())
    }



    static LoginUser(body,){
    return fetch (`http://127.0.0.1:8000/auth/`, {

        'method': 'POST',

        headers: {
          'Content-Type': 'application/json',
          
        },
        body:JSON.stringify(body)

    }).then(resp => resp.json())
    
}

static updateBook(book_id, body, token){
    return fetch (`http://127.0.0.1:8000/app/books/${book_id}/`, {

        'method': 'PUT',

        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
        body:JSON.stringify(body)

    }).then(resp => resp.json())
}

static InsertBook(body, token){
    return fetch (`http://127.0.0.1:8000/app/books/`, {

        'method': 'POST',

        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
        body:JSON.stringify(body)

    }).then(resp => resp.json())
}

static DeleteBook(book_id, token){
    return fetch (`http://127.0.0.1:8000/app/books/${book_id}/`, {

        'method': 'DELETE',

        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        }

    })

}

}