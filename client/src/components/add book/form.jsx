import React from 'react'
import { Box, TextField, TextareaAutosize } from '@mui/material'
import { Button } from 'react-bootstrap'
import attachIcon from "../../assets/img/attachGreyVector.png";
import cssModule from "../../assets/css/AddBook.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from 'react';
import checkboxIcon from "../../assets/img/check-tick-icon-14166.png";

function Form() {

  const [addBook, setAddBook] = useState({
    tittle : "",
    publication : "",
    pages : "",
    isbn : "",
    price : "",
    about : ""
  })

  const handleOnChange = (e) => {
    setAddBook({
      ...addBook,
      [e.target.name] : e.target.value
    })
  }

  const handleOnSubmit = (e) => {
    e.prevent.Default()
    console.log(addBook)
  } 

  const [preview, setPreview] = useState(null);
  const [cekPdf, setCekPdf] = useState(false);

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

        <form action="" onSubmit={handleOnSubmit}>
                    <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                
                >
                <TextField name='tittle' value={addBook.tittle} onChange={handleOnChange} id="outlined-basic" label="Tittle" variant="outlined" style={{width : "96%"}}/>

                <TextField name='publication' value={addBook.publication} onChange={handleOnChange} id="outlined-basic" label="Publication Date" variant="outlined" style={{width : "96%"}}/>

                <TextField name='pages' value={addBook.pages} onChange={handleOnChange} id="outlined-basic" label="Pages" variant="outlined" style={{width : "96%"}}/>

                <TextField name='isbn' value={addBook.isbn} onChange={handleOnChange} id="outlined-basic" label="ISBN" variant="outlined" style={{width : "96%"}}/>

                <TextField name='price' value={addBook.price} onChange={handleOnChange} id="outlined-basic" label="Price" variant="outlined" style={{width : "96%"}}/>

                <textarea name='about' value={addBook.about} onChange={handleOnChange} style={{width : "96%", height : "200px", resize : "none"}} placeholder="About This Book"></textarea>
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
                
                <Button type='submit' variant="dark" style={{marginLeft : "1%", marginRight : "1%", display : "flex", justifyContent : "flex-end", float : "right"}}>Add Book</Button>
        </form>
    </div>
  )
}

export default Form