import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import BedSideBar from 'src/views/dashboards/setup/bed/bed'
import BedContainer from 'src/views/dashboards/setup/bed/BedContainer'
import Typography from '@mui/material/Typography'

const Appointment = () => {
  const [selectedBed, setSelectedBed] = useState<string>('BedStatus')
  
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <BedSideBar onSelectBed={setSelectedBed} />
        </Grid>
        <Grid item xs={9}>
          <BedContainer selectedBed={selectedBed} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Appointment