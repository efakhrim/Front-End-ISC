// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./About.css"
import Navbar from '../components/Navbar.jsx'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

//import Box from '@mui/material/Box';



const About = () => {

  return (    
    <div className="bg-about">
        <div className="bg-about">
            <div>
                <Navbar></Navbar>
            </div>
            <div className='about-content'>
              <Grid container spacing={2}  >
                <Grid item xs={15} >
                  <Stack spacing={2} direction="row" justifyContent="center">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="src\assets\incubator.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        What is it?
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Infant Smart Care provides extra supervision for babies in the NICU with incubators that utilize IoT and machine learning to find out the baby condition through monitoring from the web and classify the baby emotions from the sound of crying produced, so that medical personnel can easily know the condition of the baby and also the incubator through a specially created application and can quickly follow up if something goes wrong with the baby.
                        </Typography>
                    </CardContent>
                    
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="src\assets\babysmile.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Know their moods
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        It can classify the emotion or cry type of the baby by using the baby sound as input to detect the baby emotion to help nurses and parents know the reason why the baby is crying.
                        </Typography>
                    </CardContent>
                    
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="src\assets\webbased.png"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Web based monitoring
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        We utilize the internet to connect babies with nurses to make it easier to monitor babies and provide the best for babies. The website on this product has several features including the main dashboard, adding a list of incubators for new babies, and realtime monitoring of sensor data obtained on active incubators.
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

export default About