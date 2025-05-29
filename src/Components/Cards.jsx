import React from 'react'
import { Box, Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';


const PurpleWave = () => (
  <svg width="150" height="80" viewBox="0 0 150 80" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#5A4FFF"/>
    </filter>
  </defs>

  <path 
    d="M0 60 
       Q 15 50, 30 55 
       T 60 45 
       T 90 50 
       T 120 40 
       T 150 45"
    stroke="#5A4FFF" 
    stroke-width="3" 
    fill="none" 
    stroke-linecap="round" 
    filter="url(#glow)" />
</svg>)

const BlueWave = () => (
  <svg width="150" height="80" viewBox="0 0 150 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="blue-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#2196F3"/>
      </filter>
    </defs>
    <path 
      d="M0 60 Q 15 50, 30 55 T 60 45 T 90 50 T 120 40 T 150 45"
      stroke="#2196F3" 
      strokeWidth="3" 
      fill="none" 
      strokeLinecap="round" 
      filter="url(#blue-glow)" 
    />
  </svg>
);

const RedWave = () => (
  <svg width="150" height="80" viewBox="0 0 150 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="red-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#F44336"/>
      </filter>
    </defs>
    <path 
      d="M0 60 Q 15 50, 30 55 T 60 45 T 90 50 T 120 40 T 150 45"
      stroke="#F44336" 
      strokeWidth="3" 
      fill="none" 
      strokeLinecap="round" 
      filter="url(#red-glow)" 
    />
  </svg>
);



const cardDetail = [
    {title:'Task Completed', Completed:'08', graph:PurpleWave, graphDetail:'10+ more from last week' },
    {title:'New Task', Completed:'10', graph:BlueWave, graphDetail:'10+ more from last week' },
    {title:'Pending Tasks', Completed:'10', graph:RedWave, graphDetail:'08+ more from last week' },
    {title:'Over Due Tasks', Completed:'10', graph:RedWave, graphDetail:'08+ more from last week' },
  ];
const Cards = () => {
  return (
    <>
    {cardDetail.map((card) => (
     <Card sx={{height: '230px', width: { xs: '20%', lg: '20%' }, marginBottom: '50px', background: ' rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)',borderRadius: '15px', minWidth:'250px'}}>
                <CardContent sx={{ marginTop:'10px' }} >
                  <Box >
                    <Box sx={{display:'flex', justifyContent:'space-evenly', marginBottom:'30%'}}>
                      <StarIcon />
                      <Typography>{card.title}</Typography>
                      <Typography>{card.Completed}</Typography>
                    </Box>
                    <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
                      {card.graph()}
                      <Box sx={{width:'60%'}}>
                        <Typography color='text.secondary'>{card.graphDetail}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
    ))}
    </>
  )
}

export default Cards
