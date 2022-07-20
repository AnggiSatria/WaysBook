import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { API } from '../../config/api';
import { useQuery } from 'react-query';
import { useCart } from "../../hooks/useCart"

function About(props) {

  const id = props.id
  const show = props.addCart

  const [lgShow, setLgShow] = useState(false)

  const {data : book} = useQuery('bookDetail',async ()=> {
    const res = await API.get(`/book/${id}`);
    return res.data.data
});

const {data : carts, refetch} = useQuery('listItemCartssss',async ()=> {
    const res = await API.get(`/carts`);
    return res.data.data[0]
});
const [isAdded, setIsAdded] = useState(false);
const {addProduct, removeProduct, cartItems} = useCart();

const handleAddToCart = () => {
    addProduct({
        ...book,
        cart_item :{
            book_id : id
        }
    });
    setIsAdded(true);
    API.post(`/cart/${id}`).then(r => refetch()).catch(e => console.log(e));
    setLgShow()
}

const handleRemoveFromCart = () => {
    setIsAdded(false);
    API.delete(`/cart/${id}`).then(r => refetch()).catch(e => console.log(e));
    removeProduct({
        ...book,
        cart_item :{
            book_id : id
        }
    });
}

useEffect(()=>{
    for (let i = 0; i < cartItems?.length; i++) {
        if (cartItems[i]?.cart_item?.book_id == id ){
            setIsAdded(true);
            break;
        }
    }
}, [isAdded])

const [modalShow, setModalShow] = React.useState(false);

  return (
    <div style={{marginLeft : "12%", marginLeft : "12%", marginTop : "50px", display : "flex", flexDirection : "column"}}>
        <h1>About This Book</h1>
        <p style={{wordWrap : "break-word"}}>{props?.desc}</p>

       
    

        <div className="button" style={{display : "flex", width : "100%", justifyContent : "flex-end"}}>
        <Button variant="dark" className="float-end" onClick={handleRemoveFromCart} hidden={!isAdded} >Remove from cart <FontAwesomeIcon icon={faCartShopping}/></Button>  
          <Button variant="dark" className="float-end" onClick={handleAddToCart}  hidden={isAdded}>Add to cart <FontAwesomeIcon icon={faCartShopping}/></Button>
        </div>
        
        <div className="modal">
        <Modal show={modalShow}
                   onHide={() => setModalShow(false)} centered>
                <Modal.Body style={{backgroundColor : '#5ef800'}} >
                    <h5 className="text-center">Successfully added books to cart!</h5>
                </Modal.Body>
            </Modal>
        </div>

        <br />
    </div>
  )
}

export default About