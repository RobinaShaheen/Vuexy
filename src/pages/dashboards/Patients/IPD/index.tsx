// ** MUI Import
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import IPDInPatientTable from 'src/views/dashboards/IPD/IPDtable'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

const Appointment = () => {
  return (
    <ApexChartWrapper>
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
      >
        OPD Patients
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <IPDInPatientTable />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Appointment
