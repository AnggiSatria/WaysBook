import React from 'react'
import IMG from "../../assets/img/contoh2.jpg"
import img from "..//../assets/img/sampah.png"

function Left() {

    const list = [
        {
            img : IMG,
            title : "Secret Her",
            creator : "By Diah",
            price : "Rp.150.000",
        },
    ]

  return (
    <div style={{width : "100%"}}>
        <div className="myCart">
            <h4>My Cart</h4>
        </div>
        
        <div className="Review" style={{marginTop : "35px"}}>
            <h5>Review Your Order</h5>
        </div>
        
        <hr style={{width : "100%", border : "1px solid black"}}/>

        {list.map((value) => {
            return <div className="card" style={{width : "100%", display : "flex" , border : "none", marginTop : "10px"}}>
            <div className="all" style={{display : 'flex'}} >
                <div className="img" style={{display : 'flex', flex : "25%"}}>
                    <img src={value.img} alt="" width={100}/>
                </div>

                <div className="content" style={{flex : "50%"}}>
                    <div className="title">
                        <h4>{value.title}</h4>
                    </div>

                    <div className="creator">
                        <p>{value.creator}</p>
                    </div>

                    <div className="price">
                        <h5 style={{color : "rgba(30, 217, 30, 0.8)"}}>{value.price}</h5>
                    </div>           
                </div>

                <div className="img2" style={{flex : "25%", display : "flex", justifyContent : "flex-end"}}>
                    <img src={img} alt="" width={25} height={25}/>
                </div>
            </div>
        </div>
        })}

       <hr style={{width : "100%", border : "1px solid black"}}/>
    </div>
  )
}

export default Left