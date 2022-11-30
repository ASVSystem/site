import React from 'react'
import { Box } from '@mui/material';
import { AppNavBar } from "../AppNavBar";

type Props = { children: React.ReactNode };

export const Layout: React.FC<Props> = ({ children }) => {

  return (
    <Box>
      <AppNavBar />
      {children}
    </Box>
  )
}