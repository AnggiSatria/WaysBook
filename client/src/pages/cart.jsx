import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import Left from '../components/cart/Left'
import Right from '../components/cart/Right'
import CustomerNavbar from '../components/navbar/CustomerNavbar'
import { API } from "../config/api"

function Cart() {

  let navigate = useNavigate()

  const [carts, setCarts] = useState([]);
  const [alerts, setAlerts] = useState(false);
  const [trigger, setTrigger] = useState(false);

  function handleClose() {
      setAlerts(false);
  }

  const getCarts = async () => {
      try {
          const response = await API.get('/carts')
          console.log(response.data.getCart)
          setCarts(response.data.getCart)
      } catch (error) {
          console.log(error)
      }
  }

  useEffect(() => {
      getCarts()
  }, [trigger])

  const handleDelete = async (id) => {
      try {
          const response = await API.delete('/cart/' + id)
          console.log(response.data.getCart)
      } catch (error) {
          console.log(error)
      }
      setTrigger(true)
  }

  useEffect(() => {
      //change this to the script source you want to load, for example this is snap.js sandbox env
      const midtransScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
      //change this according to your client-key
      const myMidtransClientKey = 'SB-Mid-client-vHbZt8xIeGsE87F0';

      let scriptTag = document.createElement('script');
      scriptTag.src = midtransScriptUrl;
      // optional if you want to set script attribute
      // for example snap.js have data-client-key attribute
      scriptTag.setAttribute('data-client-key', myMidtransClientKey);

      document.body.appendChild(scriptTag);
      return () => {
          document.body.removeChild(scriptTag);
      };
  }, []);

  const handlePay = useMutation(async (e) => {
      try {
          e.preventDefault();

          const response = await API.post('/transaction');
          // console.log("response", response);
          const token = response.data.payment.token;
          // console.log("ini cek token:", token);

          window.snap.pay(token, {
              onSuccess: function (result) {
                  /* You may add your own implementation here */
                  setAlerts(true)
                  console.log(result);
                  navigate("/profile");
              },
              onPending: function (result) {
                  /* You may add your own implementation here */
                  setAlerts(true)
                  console.log(result);
                  navigate("/profile");
              },
              onError: function (result) {
                  /* You may add your own implementation here */
                  console.log(result);
              },
              onClose: function () {
                  /* You may add your own implementation here */
                  alert("you closed the popup without finishing the payment");
              },
          });
      } catch (error) {
          console.log(error);
      }

  })


  return (
    <div>
      <div className="navbar" style={{height : "7vh"}}>
        <CustomerNavbar />
      </div>

      <div className="all" style={{marginLeft : "10%", marginRight : "10%", minHeight : "93vh", marginTop : "100px", display : "flex"}}>
        <div className="left" style={{display : "flex", flex : "50%", marginRight : "1%"}}>
          <Left/>
        </div>

        <div className="right" style={{display : "flex", flex : "50%", marginLeft : "1%"}}>
          <Right />
        </div>
      </div>
    </div>
  )
}

export default Cart