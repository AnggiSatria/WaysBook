import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from "../../assets/img/contoh.jpg"
import Img from "../../assets/img/contoh2.jpg"

function SlideBook() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    const card = [
      {
        img : img,
        tittle : "",
        creator : '',
        desc : '',
        price : '',
        name : 'Panduan Masak'
      },
      {
        img : Img,
        tittle : "",
        creator : '',
        desc : '',
        price : '',
        name : 'Panduan Masak'
      },
      {
        img : img,
        tittle : "",
        creator : '',
        desc : '',
        price : '',
        name : 'Panduan Masak'
      },
      {
        img : img,
        tittle : "",
        creator : '',
        desc : '',
        price : '',
        name : 'Panduan Masak'
      },
      {
        img : img,
        tittle : "",
        creator : '',
        desc : '',
        price : '',
        name : 'Panduan Masak'
      },
      {
        img : img,
        tittle : "",
        creator : '',
        desc : '',
        price : '',
        name : 'Panduan Masak'
      },
      {
        img : img,
        tittle : "",
        creator : '',
        desc : '',
        price : '',
        name : 'Panduan Masak'
      },
      {
        img : img,
        tittle : "",
        creator : '',
        desc : '',
        price : '',
        name : 'Panduan Masak'
      },
      {
        img : img,
        tittle : "",
        creator : '',
        desc : '',
        price : '',
        name : 'Panduan Masak'
      },
      {
        img : img,
        tittle : "",
        creator : '',
        desc : '',
        price : '',
        name : 'Panduan Masak'
      },
      {
        img : img,
        tittle : "",
        creator : '',
        desc : '',
        price : '',
        name : 'Panduan Masak'
      },
      
    ]

  return (
    <div>
        <div className="h1" style={{width : "50%", marginLeft : "auto", marginRight : "auto", marginTop : "80px"}}>
            <h2 style={{wordWrap : "break-word", textAlign : "center", color : "black"}}>With Us, You Can shop online & help save your hight street at the same time</h2>
        </div>

        <div className="slider" style={{marginTop : "80px"}}>
        <Slider {...settings}>
          {card.map((value) => {
            return <div style={{display : "flex", width : "100%"}}>
                <div className="img" style={{width : "50%", display : "flex"}}>
                  <img src={value.img} alt="" style={{width : '170px'}}/>
                </div>

                <div className="card" style={{width : "50%", display : "flex", width : '100px', marginTop : "20px"}}>
                  <h4 style={{color : "black"}}>{value.tittle}</h4>
                  <h4 style={{color : "black"}}>{value.name}</h4>
                </div>
              
            </div>
          })}
        </Slider>
        </div>
    </div>
  )
}

export default SlideBook