import React from 'react'
import img from "../../assets/img/contoh2.jpg"

function Card(props) {

    const id = props.id

    console.log(props);

  return (
    <div style={{display : "flex"}}>
        <div className="left" style={{display : "flex" ,flex : "50%", justifyContent : "flex-end", marginRight : "1%"}}>
            <img src={props.bookImg} alt="" style={{width : "400px", borderRadius : "5px"}}/>
        </div>
        
        <div className="right" style={{display : 'flex' ,flex : "50%", flexDirection : 'column', marginLeft : "1%", height : "400px"}}>
            <div className="tittle" >
                <h2 style={{wordWrap : "break-word"}}>{props.title}</h2>
                <p style={{wordWrap : "break-word"}}>{props.author}</p>
            </div>

            <div className="Publication" style={{marginTop : "30px"}}>
                <h4>Publication Date</h4>
                <p>{props.year}</p>
            </div>

            <div className="page" style={{marginTop : "30px"}}>
                <h4>Pages</h4>
                <p>{props.pages}</p>
            </div>

            <div className="code" style={{marginTop : "30px"}}>
                <h4 style={{color : "rgba(222, 55, 40, 0.9)"}}>ISBN</h4>
                <p style={{wordWrap : "break-word"}}>{props.ISBN}</p>
            </div>

            <div className="price" style={{marginTop : "30px"}}>
                <h4>Price</h4>
                <p style={{color : "rgba(65, 222, 40, 0.85)"}}>{props.price}</p>
            </div>
        </div>
    </div>
  )
}

export default Card