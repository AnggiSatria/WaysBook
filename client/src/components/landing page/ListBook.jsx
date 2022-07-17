import React from 'react'
import { Card, Button, CardGroup } from 'react-bootstrap'
import IMG from "../../assets/img/contoh2.jpg"
import { useQuery } from 'react-query'
import { useMutation } from 'react-query'
import { API } from "../../config/api"
import { Link } from 'react-router-dom'



function ListBook() {

let { data: books } = useQuery('booksCache', async () => {
  const response = await API.get('/books');
  // console.log(response);
  return response.data.data.books;
});

  return (
    <div>
        <h3 style={{marginLeft : "10%", marginRight : "10%"}}>List Book</h3>

        <div className="cards" style={{marginLeft : "10%", marginRight : "10%", display : "flex", flexWrap : "wrap", marginTop : '20px'}}>      
          {books?.map((item, index) => {
            return <Link to ={`/detail-book/${item.id}`} style={{textDecoration : "none"}}><div className="card" style={{color : "black", width : "200px", borderRadius : "5px", margin : "20px"}}>
              <div className="img">
                <img src={item.bookImg} alt="" style={{width : "100%"}}/>
              </div>

              <div className="tittle">
                <h5>{item.title}</h5>
              </div>

              <div className="creator">
                <h6>{item.author}</h6>
              </div>

              <div className="price">
                <p>{item.price}</p>
              </div>
            </div>
            </Link>
          })}  
        </div>
    </div>
  )
}

export default ListBook