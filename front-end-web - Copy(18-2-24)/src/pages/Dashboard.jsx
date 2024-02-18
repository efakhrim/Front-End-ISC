// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sidebar from "../components/Sidebar"
import Profile from "../components/Profile"
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import ChildFriendlyOutlinedIcon from '@mui/icons-material/ChildFriendlyOutlined';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import "./Dashboard.css"
import Accordion from "../components/Accordion"
import Dashchart from "../components/DashChart"


const Dashboard = () => {
  return (
    <div className='history-page'>
      <div className='bg-history'>
        <Sidebar>
          <div className='his'>
            
            <div className='text'>Dashboard Page <Profile></Profile></div>
            <br></br>
            <div>
            <Grid container spacing={2}>
              <Grid item xs={8} >
                <Stack spacing={2} direction="row">
                  <Card sx={{ minWidth: 49 + "%" , height: 130 }} className='color'>
                    <CardContent className='cardcontent'>
                      <div>
                        <ChildFriendlyIcon/>
                      </div>
                      <Typography gutterBottom variant="h5" component="div" fontWeight={600}>
                        1
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div">
                        Active/In Use Incubator
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ minWidth: 49 + "%" , height: 130 }} className='colorMiddle'>
                    <CardContent className='cardcontent'>
                      <div>
                        <ChildFriendlyOutlinedIcon/>
                      </div>
                      <Typography gutterBottom variant="h5" component="div" fontWeight={600}>
                        4
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div">
                        Ready Incubator
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2} >
                <Card sx={{ minWidth: 49 + "%" , height: 130 }} className='colorRight'>
                    <CardContent className='cardcontent'>
                      <div>
                        <DisplaySettingsIcon/>
                      </div>
                      <Typography gutterBottom variant="h5" component="div" fontWeight={600}>
                        2
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div">
                       Adjustment to Environmental Conditions
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={8} >
                <Card sx={{ height: 57 + "vh" }}>
                  <CardContent>
                    <Dashchart/>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4} >
              <Card sx={{ height: 57 + "vh" }}>
                  <CardContent>
                    <Accordion/>
                  </CardContent>
                </Card>
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