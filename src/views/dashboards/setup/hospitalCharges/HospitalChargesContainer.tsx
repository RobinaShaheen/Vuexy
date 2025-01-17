import React from 'react'
import Grid from '@mui/material/Grid'
import Charges from 'src/pages/setup/hospitalCharges/Charges'
import ChargesCategory from 'src/pages/setup/hospitalCharges/ChargesCatagory'
import ChargeType from 'src/pages/setup/hospitalCharges/ChargesType'
import TaxCatagory from 'src/pages/setup/hospitalCharges/TaxCatagory'
import UnitTypeTable from 'src/pages/setup/hospitalCharges/UnitType'

// import other setting components as needed

const HospitalChargesContainer = ({ selectedSetting }: { selectedSetting: string }) => {
  const renderSetting = () => {
    switch (selectedSetting) {
      case 'Charges':
        return <Charges />;
      case 'ChargesCatagory':
        return <ChargesCategory/>;
      case 'ChargesType':
        return <ChargeType/>;
      case 'TaxCatagory':
        return <TaxCatagory/>;
      case 'UnitType':
        return <UnitTypeTable/>;
      
        // Add cases for other settings components
      default:
        return <Charges/>;
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

export default HospitalChargesContainer
