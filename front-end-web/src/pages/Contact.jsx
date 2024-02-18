// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Contact.css"
import Navbar from '../components/Navbar.jsx'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

//import Box from '@mui/material/Box';



const Contact = () => {

  return (    
    <div className="bg-contact">
        <div className="bg-contact">
            <div>
                <Navbar></Navbar>
            </div>
            <div className='about-content'>
              <Grid container spacing={2}  >
                <Grid item xs={15} >
                  <Stack spacing={2} direction="row" justifyContent="center">
                  
                    <Card sx={{ minWidth: 400 }} className='card-contact'>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="src\assets\contactus.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Where to find us?
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Telephone : <br/>
                        +62 823-3163-7815 <br/>
                        +62 811-1637-687 <br/>
                        +62 821-9351-3562<br/>
                        +62 813-3815-5760<br/>
                        <br/>
                        <br/>
                        Email :<br/>
                        introbrilli@gmail.com<br/>
                        rahmansyahfaris@gmail.com<br/>
                        efakhri.m@gmail.com
                        </Typography>
                    </CardContent>
                 
                    </Card>
                  </Stack>
                </Grid>
              </Grid>
            </div>
        </div>
    </div>
  )
}

export default Contact