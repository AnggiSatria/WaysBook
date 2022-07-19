import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import Left from '../components/cart/Left'
import Right from '../components/cart/Right'
import CustomerNavbar from '../components/navbar/CustomerNavbar'
import { API } from "../config/api"
import {useCart} from "../../src/hooks/useCart";
import img from "../assets/img/sampah.png"

function Cart() {

    const {data : carts, refetch} = useQuery('listItemCartss',async ()=> {
        const res = await API.get(`/carts`);
        return res.data.data[0]
    });

    const navigate = useNavigate();
    const {removeProduct} = useCart();
    const handleRemoveFromCart = useMutation((id) => {
        API.delete(`/cart/${id}`).then(r => refetch()).catch(e => console.log(e));
        removeProduct({
            ...carts,
            cart_item :{
                book_id : id
            }
        });

    })

    const handlePay = useMutation(async () => {
        try {
            // Get data from product

            // Insert transaction data
            const response = await API.post("/transaction");
            console.log(response);
            // Create variabel for store token payment from response here ...
            const token = response.data.payment.token;

            // Init Snap for display payment page with token here ...
            window.snap.pay(token,{
                onSuccess: function (result) {
                    /* You may add your own implementation here */
                    console.log(result);
                    navigate("/");
                },
                onPending: function (result) {
                    /* You may add your own implementation here */
                    console.log(result);
                    navigate("/");
                },
                onError: function (result) {
                    /* You may add your own implementation here */
                    navigate(result);
                },
                onClose: function () {
                    /* You may add your own implementation here */
                    alert("you closed the popup without finishing the payment");
                },
            })
        } catch (error) {
            console.log(error);
        }
    });

    useEffect(() => {
        //change this to the script source you want to load, for example this is snap.js sandbox env
        const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
        //change this according to your client-key
        const myMidtransClientKey = "SB-Mid-client-LQsMqwYk9hPkOoEx";

        let scriptTag = document.createElement("script");
        scriptTag.src = midtransScriptUrl;
        // optional if you want to set script attribute
        // for example snap.js have data-client-key attribute
        scriptTag.setAttribute("data-client-key", myMidtransClientKey);

        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        };
    }, []);


  return (
    <div>
      <div className="navbar" style={{height : "7vh"}}>
        <CustomerNavbar />
      </div>

      <div className="all" style={{marginLeft : "10%", marginRight : "10%", minHeight : "93vh", marginTop : "100px", display : "flex"}}>
        <div className="left" style={{display : "flex", flex : "50%", marginRight : "1%"}}>
        <div style={{width : "100%"}}>
        <div className="myCart">
            <h4>My Cart</h4>
        </div>
        
        <div className="Review" style={{marginTop : "35px"}}>
            <h5>Review Your Order</h5>
        </div>
        
        <hr style={{width : "100%", border : "1px solid black"}}/>

        {carts?.book?.map((item) => {
            return <div className="card" style={{width : "100%", display : "flex" , border : "none", marginTop : "10px"}}>
            <div className="all" style={{display : 'flex'}} >
                <div className="img" style={{display : 'flex', flex : "25%"}}>
                    <img src={item?.image} alt="" width={100} />
                </div>

                <div className="content" style={{flex : "50%"}}>
                    <div className="title">
                        <h4>{item?.title}</h4>
                    </div>

                    <div className="creator">
                        <p>{item?.author}</p>
                    </div>

                    <div className="price">
                        <h5 style={{color : "rgba(30, 217, 30, 0.8)"}}>{item?.price}</h5>
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
        </div>

        <div className="right" style={{display : "flex", flex : "50%", marginLeft : "1%"}}>
          <Right />
        </div>
      </div>
    </div>
  )
}

export default Cart