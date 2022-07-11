import React from 'react'
import { Box, TextField, TextareaAutosize } from '@mui/material'
import { Button } from 'react-bootstrap'
import attachIcon from "../../assets/img/attachGreyVector.png";
import cssModule from "../../assets/css/AddBook.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from 'react';
import checkboxIcon from "../../assets/img/check-tick-icon-14166.png";
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { API } from "../../config/api"
import { useMutation } from 'react-query';
import bookWhite from "../../assets/img/bookWhite.png"

function Form() {

  let navigate = useState()

  const [preview, setPreview] = useState(null);
  const [cekPdf, setCekPdf] = useState(false);
  const [state, dispacth] = useContext(UserContext)
  const [addBook, setAddBook] = useState({
    title : "",
    year : "",
    pages : "",
    author : "",
    ISBN : "",
    price : "",
    desc : "",
    bookImg : "",
    bookPdf : ""
  })

  const handleOnChange = (e) => {
    setAddBook({
      ...addBook,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    })

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  }
  

  const handleOnSubmit = async (e) => {

        e.preventDefault()
        console.log(addBook)

        const formData = new FormData();

        formData.set("bookPdf", addBook.bookPdf[0], addBook.bookPdf[0].name);
        formData.set("bookImg", addBook.bookImg[0], addBook.bookImg[0].name);
        formData.set("title", addBook.title);
        formData.set("year", addBook.year);
        formData.set("author", addBook.author);
        formData.set("pages", addBook.pages);
        formData.set("ISBN", addBook.ISBN);
        formData.set("price", addBook.price);
        formData.set("desc", addBook.desc);

        const config = {
          headers: {
            "Content-type": "multipart/form-data",
          },
        };
    
        await API.post("/book", formData, config)
          .then((res) => {
            navigate("/");
          })
          .catch((err) => console.log(err));
    }

  const handleChangePdf = (e) => {
    setAddBook({
      ...addBook,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    
    setCekPdf(true);
  };

  return (
    <div>
        <div className="h1" style={{marginLeft : "1%", marginRight : "1%"}}>
            <h3>Add Book</h3>
        </div>

        <form onSubmit={handleOnSubmit}>
                    <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                
                >
                <TextField name='tittle' value={addBook.title} onChange={handleOnChange} id="outlined-basic" label="Tittle" variant="outlined" style={{width : "96%"}}/>

                <TextField name='publication' value={addBook.year} onChange={handleOnChange} id="outlined-basic" label="Publication Date" variant="outlined" style={{width : "96%"}}/>

                <TextField name='author' value={addBook.author} onChange={handleOnChange} id="outlined-basic" label="Author" variant="outlined" style={{width : "96%"}}/>

                <TextField name='pages' value={addBook.pages} onChange={handleOnChange} id="outlined-basic" label="Pages" variant="outlined" style={{width : "96%"}}/>

                <TextField name='ISBN' value={addBook.ISBN} onChange={handleOnChange} id="outlined-basic" label="ISBN" variant="outlined" style={{width : "96%"}}/>

                <TextField name='price' value={addBook.price} onChange={handleOnChange} id="outlined-basic" label="Price" variant="outlined" style={{width : "96%"}}/>

                <textarea name='about' value={addBook.desc} onChange={handleOnChange} style={{width : "96%", height : "200px", resize : "none"}} placeholder="About This Book"></textarea>
                </Box>

              <Row
                className={cssModule.uploadSection}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Col>
                  <label htmlFor="bookPdf">
                    <div>
                      <span>Attach Book File</span>
                      <img src={attachIcon} alt="" />
                    </div>
                  </label>
                  <input
                    type="file"
                    name="bookPdf"
                    id="bookPdf"
                    onChange={handleChangePdf}
                    hidden
                  />
                </Col>
                <Col>
                  {cekPdf ? (
                    <img src={checkboxIcon} alt="" />
                  ) : (
                    <p>No PDF Uploaded</p>
                  )}
                </Col>
              </Row>
              <Row
            className={cssModule.uploadSection}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Col>
              <label htmlFor="bookImg">
                <div>
                  <span>Attach Cover</span>
                  <img src={attachIcon} alt="" />
                </div>
              </label>
              <input
                type="file"
                name="bookImg"
                id="bookImg"
                onChange={handleOnChange}
                hidden
              />
            </Col>
            <Col>
              <img
                src={preview}
                style={{
                  maxWidth: "60px",
                  maxHeight: "60px",
                }}
                alt=""
              />
            </Col>
          </Row>
          <Row className={cssModule.btnSection}>
            <button type="submit">
              <span>Add Book</span>
              <img src={bookWhite} alt="" />
            </button>
          </Row>
          <br />
        </form>
    </div>
  )
}

export default Form