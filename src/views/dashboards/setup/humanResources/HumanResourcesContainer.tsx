import React from 'react'
import Grid from '@mui/material/Grid'
import Leave from 'src/pages/setup/humanResources/leave'
import Department from 'src/pages/setup/humanResources/department'
import Designation from 'src/pages/setup/humanResources/designation'
import Specialist from 'src/pages/setup/humanResources/specialist'

// import other setting components as needed

const HumanResourcesContainer = ({ selectedSetting }: { selectedSetting: string }) => {
  const renderSetting = () => {
    switch (selectedSetting) {
      case 'leaveType':
        return <Leave />;
      case 'department':
        return <Department/>;
      case 'designation':
        return <Designation />;
      case 'specialist':
        return <Specialist/>;
        
        // Add cases for other settings components
      default:
        return <Leave/>;
    }
  }

  return (
    
    <Grid container spacing={6}>
      <Grid item xs={10} sx={{ml: 24}}>
        {renderSetting()}
      </Grid>
    </Grid>
  )
}

export default HumanResourcesContainer
