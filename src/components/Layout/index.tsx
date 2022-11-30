import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import { AppNavBar } from "../AppNavBar";

export function Layout({ children }) {

  return (
    <Box>
      <AppNavBar />
      {children}
    </Box>
  )
}