
// ** MUI Import
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import AddCertificateTemplate from 'src/views/dashboards/certificate/addCertificateTemplate'


const AddCertificateTmplate = () => {
  
  return (

    <ApexChartWrapper>
      <Typography
        variant='h4' // You can adjust the variant as needed (e.g., 'h3', 'h2')
        gutterBottom
        sx={{ mb: 4 }} // Adjust margin bottom if needed
      >
        Add Certificate Template
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <AddCertificateTemplate />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

AddCertificateTmplate.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default AddCertificateTmplate
