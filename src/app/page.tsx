import Head from 'next/head'
import React from 'react'
import { SampleComponent } from '../components/SampleComponent'
import { Box } from '@radix-ui/themes'

export default function Home() {
  return (
    <Box>
      <SampleComponent />
    </Box>
  )
}
