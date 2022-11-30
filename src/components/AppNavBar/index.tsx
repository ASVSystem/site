import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import Link from 'next/link';
import { Divider } from '@mui/material';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export function AppNavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorProducts, setOpenProducts] = React.useState<null | HTMLElement>(null);


  const session = false // implement authentication 

  const open = Boolean(anchorEl);
  const isOpenProducts = Boolean(anchorProducts)

  const handleClickProducts = (event: React.MouseEvent<HTMLElement>) => {
    setOpenProducts(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenProducts(null)
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Do not show when more then md screen*/}
          <Box sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
          }}>
            <Image

              width={58}
              height={58}
              src="/LogoBranca.png"
              alt='Logo'
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Typography variant='h5' sx={{ minWidth: 100 }}>
              <Link href="/" style={{ textDecoration: 'none' }} >About Us</Link>
            </Typography>
            <Typography variant='h5' onClick={handleClickProducts} sx={{ minWidth: 100, }}>
              Products
            </Typography>
            <Typography variant='h5' sx={{ minWidth: 100, }}>Contact</Typography>
            <Typography variant='h5' sx={{ minWidth: 100, }}>
              <Link href="/privacy-policy" style={{ textDecoration: 'none' }} >Privacy Policy</Link>
            </Typography>
          </Box>

          {/* Do not show when small screen*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },

              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem>
                <Typography variant='h5' sx={{ minWidth: 100 }}>
                  <Link href="/" style={{ textDecoration: 'none' }} >About Us</Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography variant='h5' onClick={handleClickProducts} sx={{ minWidth: 100, }}>
                  Products
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography variant='h5' sx={{ minWidth: 100, }}>Contact</Typography>
              </MenuItem>
              <MenuItem>
                <Typography variant='h5' sx={{ minWidth: 100, }}>
                  <Link href="/privacy-policy" style={{ textDecoration: 'none' }} >Privacy Policy</Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{
            mr: 2,
            padding: 1,
            display: { xs: 'flex', md: 'none', alignItems: 'contents', },
            flexGrow: 1,

          }}>
            <Image
              width={48}
              height={48}
              src="/LogoBranca.png"
              alt='Logo'
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none', alignItems: 'center' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.4rem',
                color: 'inherit',
                textDecoration: 'none',
                width: '100%'
              }}>

              SVSYSTEM
            </Typography>
          </Box>

          {/* Render only valid session*/}
          {
            session ?
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              : ''
          }

          {/* Products menu */}
          <Menu
            anchorEl={anchorProducts}
            id="products-menu"
            open={isOpenProducts}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem component='a' href="/product">
              Easy CDS
            </MenuItem>
            <MenuItem component='a' href="/products#vancomycin-calculator">
              Vancomycin Calculator
            </MenuItem>
            <Divider />
            <MenuItem>
              All Products
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
