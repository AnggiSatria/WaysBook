import React from 'react'
import CustomerNavbar from '../components/navbar/CustomerNavbar'
import Card from "../components/detail book/Card"
import About from '../components/detail book/About'
import "../assets/css/bg.css"
import { useState } from 'react'
import { Modal } from "react-bootstrap"
import IMG from '../../src/assets/img/background.png'
import { useQuery } from 'react-query'
import { API } from "../config/api"
import { useParams } from 'react-router-dom'
import { useEffect } from "react"

function DetailBook() {

  let { id } = useParams()

  console.log(id)
  
  
  const [isBuy, setIsBuy] = useState(false);
  const [alerts, setAlerts] = useState(false);
  const [dtlBook, setDtlBook] = useState({});

  let { data: book } = useQuery('bookCache', async () => {
      const response = await API.get(`/book/${id}`);
      console.log(response);
      return response.data.data.book;
  });

  console.log(book);

  const setAddCart = () => {
    try {

        // Configuration Content-type
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };

        const response = API.post('/cart', { idProduct: id }, config)
        console.log(response);
        setAlerts(true);

    } catch (error) {
        console.log(error);
    }
};

const getPurchased = async () => {
    try {
        const response = await API.get(`/purchased/ ${id}`)
        // console.log(response);
        if (response.data.purBook) {
            setIsBuy(true)
        }
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    setDtlBook(book)
    getPurchased()
}, []);

  document.body.style.backgroundImage = IMG;


  return (
    <div>
      <div className="navbar">
        <CustomerNavbar/>
      </div>

        <div className="book" style={{minHeight : "93vh", marginLeft : "10%", marginRight : "10%"}}>
          <Card bookImg={book?.bookImg} title={book?.title} year={book?.year} author={book?.author} Pages={book?.pages} ISBN={book?.ISBN} price={book?.price}/>

          <About desc={book?.desc} addCart={setAddCart} id={id}/>
        </div>
          
    </div>
  )
}

export default DetailBook