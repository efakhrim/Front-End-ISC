// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sidebar from "../components/Sidebar"
import Profile from "../components/Profile"
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
//import { Table } from "../components/HistoryTab";
//import {Content} from "../components/DBContent"
import "./History.css"


const Dashboard = () => {
  return (
    <div className='history-page'>
      <div className='bg-history'>
        <Sidebar>
          <div className='his'>
            <Profile></Profile>
            <div className='text'>Dashboard Page</div>
            <br></br>
            <div>
            <Grid container spacing={2}>
              <Grid item xs={4} md={8}>
                <Stack spacing={2} direction="row">
                  <Card sx={{ maxWidth: 345 }}>
   
                    <image src="/src/assets/logo-ISC.png"></image>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <image src="/src/assets/logo-ISC.png"></image>
                      <Typography variant="body2" color="text.secondary"><image src="/src/assets/logo-ISC.png"></image>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={6} md={4}>
                <Stack spacing={2} direction="row">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="green iguana"
                    />
                    <CardContent>

                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                  
                </Stack>
              </Grid>
              <Grid item xs={6} md={4}>
                
              </Grid>
              <Grid item xs={6} md={8}>
                
              </Grid>
            </Grid>
            </div>
            
            
          </div>
        </Sidebar>
      </div>

    </div>
  )
}

export default Dashboard