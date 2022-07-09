import React from 'react'
import img from "../../assets/img/contoh2.jpg"

function Card() {
  return (
    <div style={{display : "flex"}}>
        <div className="left" style={{display : "flex" ,flex : "50%", justifyContent : "flex-end", marginRight : "1%"}}>
            <img src={img} alt="" style={{width : "400px", borderRadius : "5px"}}/>
        </div>
        
        <div className="right" style={{display : 'flex' ,flex : "50%", flexDirection : 'column', marginLeft : "1%", height : "400px"}}>
            <div className="tittle" >
                <h2 style={{wordWrap : "break-word"}}>Her Secret</h2>
                <p style={{wordWrap : "break-word"}}>Diah Martiana</p>
            </div>

            <div className="Publication" style={{marginTop : "30px"}}>
                <h4>Publication Date</h4>
                <p>20 Juni 2021</p>
            </div>

            <div className="page" style={{marginTop : "30px"}}>
                <h4>Pages</h4>
                <p>300</p>
            </div>

            <div className="code" style={{marginTop : "30px"}}>
                <h4>ISBN</h4>
                <p style={{wordWrap : "break-word"}}>99999991777777</p>
            </div>

            <div className="price" style={{marginTop : "30px"}}>
                <h4>Price</h4>
                <p>Rp.500.000,-</p>
            </div>
        </div>
    </div>
  )
}

export default Card