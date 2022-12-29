import * as React from 'react';
import Image from 'next/image';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { Layout } from '../components/Layout';

import { getDatoContent } from '../lib/datocms'
import { StructuredText, StructuredTextDocument } from 'react-datocms';
import { Box } from '@mui/system';



const PRODUCTS = `query MyQuery {
  allVancomycinCalculators {
    title
    image {
      url
    }
    vancomycinCalculator {
      value
    }
  }
}
`;

interface AllVancomycinCalculators {
  allVancomycinCalculators: [{
    title: string,
    image: {
      url: string,
    },
    vancomycinCalculator: {
      value: any
    }
  }]
}



export async function getStaticProps() {
  const { allVancomycinCalculators } = await getDatoContent({
    query: PRODUCTS,
    preview: ''
  });


  return {
    props: { allVancomycinCalculators }
  };
}

export default function Products({ allVancomycinCalculators }: AllVancomycinCalculators) {
  const products = allVancomycinCalculators

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
          {products.map(content =>
            <Container key={content.title} maxWidth="xl">

              <Typography fontSize={20} fontWeight="bold" color="primary.main" >{content.title}</Typography>

              <StructuredText data={content.vancomycinCalculator.value} />
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Image src={content.image.url} alt="Image calculadora" width={1024} height={500} />
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', md: 'none' } }}>
                <Image src={content.image.url} alt="Image calculadora" width={600} height={300}
                />
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none', md: 'none' } }}>
                <Image src={content.image.url} alt="Image calculadora" width={350} height={150}
                />
              </Box>
              {/* <Typography>{content.image.url}</Typography> */}

            </Container>
          )}
        </section>
      </Container>
    </Layout>
  );
}