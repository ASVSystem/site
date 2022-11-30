import * as React from 'react';

import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { Layout } from '../components/Layout';

export default function Products() {
  return (
    <Layout>
      <Container sx={{
        paddingTop: 2,
        height: '100vh'
      }}>
        <section style={{ height: '100vh', marginTop: 20 }} id='easy-cds'>
          <Container maxWidth="xl">
            <Typography fontSize={20} fontWeight="bold" color="primary.main">Products</Typography>
          </Container>
        </section>
        <section style={{ height: '100vh', marginTop: 20 }} id='vancomycin-calculator'>
          <Container maxWidth="xl">
            <Typography fontSize={20} fontWeight="bold" color="primary.main">Vancomycin</Typography>
          </Container>
        </section>
      </Container>
    </Layout>
  );
}