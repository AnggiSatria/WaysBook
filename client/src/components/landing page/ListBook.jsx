import React from 'react'
import { Card, Button, CardGroup } from 'react-bootstrap'
import IMG from "../../assets/img/contoh2.jpg"


const cards = [
  {
    img : IMG,
    title : "Novel",
    creator : "JK Rowling",
    price : "Rp.50000"
  },
  {
    img : IMG,
    title : "Novel",
    creator : "JK Rowling",
    price : "Rp.50000"
  },
  {
    img : IMG,
    title : "Novel",
    creator : "JK Rowling",
    price : "Rp.50000"
  },
  {
    img : IMG,
    title : "Novel",
    creator : "JK Rowling",
    price : "Rp.50000"
  },
  {
    img : IMG,
    title : "Novel",
    creator : "JK Rowling",
    price : "Rp.50000"
  },
]

function ListBook() {
  return (
    <div>
        <h3 style={{marginLeft : "10%", marginRight : "10%"}}>List Book</h3>

        <div className="cards" style={{marginLeft : "10%", marginRight : "10%", display : "flex", flexWrap : "wrap", marginTop : '20px'}}>      
          {cards.map((value) => {
            return <div className="card" style={{color : "black", width : "200px", borderRadius : "5px", margin : "20px"}}>
              <div className="img">
                <img src={value.img} alt="" style={{width : "100%"}}/>
              </div>

              <div className="tittle">
                <h5>{value.title}</h5>
              </div>

              <div className="creator">
                <h6>{value.creator}</h6>
              </div>

              <div className="price">
                <p>{value.price}</p>
              </div>
            </div>
          })}  
        </div>
    </div>
  )
}

export default ListBook