import React from 'react'
import { Box } from '@mui/material'
import Cards from '../Components/Cards.jsx'
import Task from '../Components/Task.jsx'

const Home = () => {
  return (
    <>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: '20px', justifyContent: 'center'}} >
          <Cards />
        </Box>

        <Task />
    </>
  )
}

export default Home