/* eslint-disable @typescript-eslint/no-unused-vars */

// ** React Imports
'use client'
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import MenuItem from '@mui/material/MenuItem'
import { Typography } from '@mui/material'

//Dummy Data
const chargesTypes = ['select','OPD', 'IPD','Apponitment','PAthology','Radiology','Ambulance','Blood Bank','Operation','Other']
const chargesCategories = ['select', '']
const unitType = ['selsct','ML','Litter','NM','Per Day','Per Hour']
const taxCategories = ['select','Blood Module','OPD tax','IPd tax','Operation charges','Pathology tax','Radiology tax','Ambulance tax']

const AddChargeType = () => {
    const [value, setValue] = useState<string>('')
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  return (
    <Grid container spacing={6} display={'flex'}>
      <Grid item xs={12} >
        <Card>
          <CardContent>
            <CustomTextField fullWidth label='Charge Type' type='' required sx={{ mb: 2 }} />
            
            <Box >
                <Box sx={{ mb: 2 }}>
                    <Typography>Module*</Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{display:'flex',  mb:2}}><input type='checkbox'/><Typography>Apointment</Typography></Box>
                  <Box sx={{display:'flex',  mb:2}}><input type='checkbox'/><Typography>OPD</Typography></Box>   
                  <Box sx={{display:'flex',  mb:2}}><input type='checkbox'/><Typography> IPD</Typography></Box>
                  <Box sx={{display:'flex',  mb:2}}><input type='checkbox'/><Typography> Pathology</Typography></Box> 
                  <Box sx={{display:'flex',  mb:2}}><input type='checkbox'/><Typography> Radiology</Typography></Box> 
                  <Box sx={{display:'flex',  mb:2}}><input type='checkbox'/><Typography> Ambulance</Typography></Box> 
                  <Box sx={{display:'flex',  mb:2}}><input type='checkbox'/><Typography> Blood Bank</Typography></Box> 
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button variant='contained' fullWidth sx={{ mr: 2 }}>
                Save
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AddChargeType