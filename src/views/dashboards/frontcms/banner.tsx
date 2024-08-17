// ** React Imports
'use client'
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import MenuItem from '@mui/material/MenuItem'
// ** Icon Imports
import Box from '@mui/material/Box'
import CustomTextField from 'src/@core/components/mui/text-field'
import Image from 'next/image'
import Icon from 'src/@core/components/icon'
// ** Custom Component Imports
// import CustomTextField from 'src/@core/components/mui/text-field'
// import { IconButton, Tooltip } from '@mui/material'

const Banners = () => {
  // ** State
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  return (
    <Card>
        <CardContent>
            <Box sx={{ mb: 4}}>
            <Button
                component={Link}
                variant='contained'
                href='/front-cms/addmedia'
                startIcon={<Icon icon='tabler:plus' />}
            >
                Add Images
            </Button>
            </Box>
        </CardContent>
      <CardContent sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>  
        <Image width={150} height={150} src='/images/apple-touch-icon.png' alt='Touch Icon'></Image>
        <Image width={150} height={150} src='/images/logos/american-express.png' alt='Favicon Icon'></Image>
        <Image width={150} height={150} src='/images/logos/asana.png' alt='Touch Icon'></Image>
        <Image width={150} height={150} src='/images/logos/behance.png' alt='Favicon Icon'></Image>
        <Image width={150} height={150} src='/images/logos/bootstrap.png' alt='Touch Icon'></Image>
        <Image width={150} height={150} src='/images/logos/brave.png' alt='Favicon Icon'></Image>
        <Image width={150} height={150} src='/images/logos/chrome.png' alt='Touch Icon'></Image>
        <Image width={150} height={150} src='/images/logos/dribbble.png' alt='Favicon Icon'></Image>
        <Image width={150} height={150} src='/images/logos/facebook.png' alt='Touch Icon'></Image>
        <Image width={150} height={150} src='/images/logos/figma.png' alt='Favicon Icon'></Image>
        <Image width={150} height={150} src='/images/logos/github.png' alt='Touch Icon'></Image>
        <Image width={150} height={150} src='/images/logos/google.png' alt='Favicon Icon'></Image>
      </CardContent>
    </Card>
  )
}

export default Banners