import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Img from "../../assets/img/contoh2.jpg"

function MyBook() {

    const card = [
        {
            img : Img,
            tittle : "Secret Her",
            creator : "By Diah"
        },
        {
            img : Img,
            tittle : "Secret Her",
            creator : "By Diah"
        },
        {
            img : Img,
            tittle : "Secret Her",
            creator : "By Diah"
        },
        {
            img : Img,
            tittle : "Secret Her",
            creator : "By Diah"
        },
        {
            img : Img,
            tittle : "Secret Her",
            creator : "By Diah"
        },
        {
            img : Img,
            tittle : "Secret Her",
            creator : "By Diah"
        },
        {
            img : Img,
            tittle : "Secret Her",
            creator : "By Diah"
        },
    ]

  return (
    <div>
        <h3>My Book</h3>

        <div className="cards" style={{border : "none", marginTop : "40px", display : "flex", flexWrap : "wrap"}}>
                {card.map((value) => {
                    return <Card sx={{ maxWidth: 250 }} style={{marginLeft : "5px", marginRight : "5px", marginTop : "30px"}}>
                    <img src={value.img} alt="" style={{width : "100%"}}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {value.tittle}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {value.creator}
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button variant="contained" color="inherit" style={{width : "100%"}}>Download</Button>
                    </CardActions>
                </Card>
                })}
            
        </div>
    </div>
  )
}

export default MyBook