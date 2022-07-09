import React from 'react'
import { Box, TextField, TextareaAutosize, Button } from '@mui/material'

function Form() {
  return (
    <div>
        <div className="h1" style={{marginLeft : "1%", marginRight : "1%"}}>
            <h3>Add Book</h3>
        </div>

        <form action="">
                    <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                
                >
                <TextField id="outlined-basic" label="Tittle" variant="outlined" style={{width : "96%"}}/>

                <TextField id="outlined-basic" label="Publication Date" variant="outlined" style={{width : "96%"}}/>

                <TextField id="outlined-basic" label="Pages" variant="outlined" style={{width : "96%"}}/>

                <TextField id="outlined-basic" label="ISBN" variant="outlined" style={{width : "96%"}}/>

                <TextField id="outlined-basic" label="Price" variant="outlined" style={{width : "96%"}}/>

                <textarea style={{width : "96%", height : "200px", resize : "none"}} placeholder="About This Book"></textarea>
                </Box>

                <input type="file" style={{width : "96%", marginLeft : "1%", marginRight : "1%", borderRadius : "5px"}}/>
                
                <Button variant="contained" style={{marginLeft : "1%", marginRight : "1%", display : "flex", justifyContent : "flex-end", float : "right"}}>Add Book</Button>
        </form>
    </div>
  )
}

export default Form