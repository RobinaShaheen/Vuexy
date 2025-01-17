
// /* eslint-disable @typescript-eslint/no-unused-vars */
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import React from 'react'

// Style the Box component for the sidebar layout
const OptionsWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',  // Arrange items vertically
  alignItems: 'flex-start', // Align items to the start
  justifyContent: 'flex-start', // Align items to the start
  gap: '12px', // Space between items
  width: '300px' // Adjust the width of the sidebar
}))

// Style the Link component to remove underline and adjust color
const StyledLink = styled('button')(() => ({
  textDecoration: 'none', // Remove underline
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  color: '#000', // Set text color to black (you can adjust this to your preferred color)
  fontSize: '16px', // Adjust the font size
  textAlign: 'left', // Align text to the left
  width: '100%',
  '&:hover': {
    color: '#3f51b5', // Change color on hover (optional)
  }
}))

interface HeaderFooterSideBarProps {
  onSelectSetting: (setting: string) => void;
}

const HeaderFooterSideBarProps: React.FC<HeaderFooterSideBarProps> = ({ onSelectSetting }) => {
  
  return (
    <Grid container spacing={6}>
      <Grid item>
        <Card>
          <CardContent>
            <OptionsWrapper>
              <StyledLink onClick={() => onSelectSetting('opdPrescrition')} sx={{"&:focus": { textDecoration: 'none' }}}>OPD Prescription</StyledLink>
              <StyledLink onClick={() => onSelectSetting('opdBill')} sx={{"&:focus": { textDecoration: 'none' }}}>OPD Bill</StyledLink>
              <StyledLink onClick={() => onSelectSetting('ipdPrescription')} sx={{"&:focus": { textDecoration: 'none' }}}>IPD Prescription</StyledLink>
              <StyledLink onClick={() => onSelectSetting('ipdBill')} sx={{"&:focus": { textDecoration: 'none' }}}>IPD Bill</StyledLink>
              <StyledLink onClick={() => onSelectSetting('bill')} sx={{"&:focus": { textDecoration: 'none' }}}>Bill</StyledLink>
              <StyledLink onClick={() => onSelectSetting('pharmacyBill')} sx={{"&:focus": { textDecoration: 'none' }}}>Pharmacy Bill</StyledLink>
              <StyledLink onClick={() => onSelectSetting('paySlip')} sx={{"&:focus": { textDecoration: 'none' }}}>Pay Slip</StyledLink>
              <StyledLink onClick={() => onSelectSetting('paymentReceipt')} sx={{"&:focus": { textDecoration: 'none' }}}>Payment Receipt</StyledLink>
              <StyledLink onClick={() => onSelectSetting('birthRecord')} sx={{"&:focus": { textDecoration: 'none' }}}>Birth Record</StyledLink>
              <StyledLink onClick={() => onSelectSetting('deathRecord')} sx={{"&:focus": { textDecoration: 'none' }}}>Death Record</StyledLink>
              <StyledLink onClick={() => onSelectSetting('pathology')} sx={{"&:focus": { textDecoration: 'none' }}}>Pathology</StyledLink>
              <StyledLink onClick={() => onSelectSetting('radiology')} sx={{"&:focus": { textDecoration: 'none' }}}>Radiology</StyledLink>
              <StyledLink onClick={() => onSelectSetting('operation')} sx={{"&:focus": { textDecoration: 'none' }}}>Operation</StyledLink>
              <StyledLink onClick={() => onSelectSetting('bloodBank')} sx={{"&:focus": { textDecoration: 'none' }}}>Blood Bank</StyledLink>
              <StyledLink onClick={() => onSelectSetting('ambulance')} sx={{"&:focus": { textDecoration: 'none' }}}>Ambulance</StyledLink>
              <StyledLink onClick={() => onSelectSetting('dischargeCard')} sx={{"&:focus": { textDecoration: 'none' }}}>Discharge Card</StyledLink>
              {/* Add more settings links as needed */}
            </OptionsWrapper>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default HeaderFooterSideBarProps

