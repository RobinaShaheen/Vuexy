/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Image from 'next/image'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CustomTextField from 'src/@core/components/mui/text-field'
import Typography from '@mui/material/Typography'
import Icon from 'src/@core/components/icon'
import Link from 'next/link'

const OptionsWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))

const RegisterAndroidApp = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <CustomTextField fullWidth label='Envato Market Purchase Code For Smart Hospital Android App ( How to find it? )' sx={{ mb: 4}}/>
            <CustomTextField fullWidth label='Your Email Registered With Envato' sx={{ mb: 4 }}/>
            <Button
                component={Link}
                variant='contained'
                href='/Setup/Setting/register-app'
            >
                Save
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default RegisterAndroidApp
