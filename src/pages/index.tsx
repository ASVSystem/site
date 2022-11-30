import * as React from 'react';

import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';



import { getDatoContent } from '../lib/datocms'
import { StructuredText, StructuredTextDocument } from 'react-datocms';
import { Layout } from '../components/Layout';


const HOME_ABOUT_US = `query MyQuery {
  allHomeAbouts {
    title
    content {
      value
    }
  }
}
`


interface HomeAboutUsProps {
  allHomeAbouts: [{
    title: string;
    content: Document | StructuredText<Record, Record> | StructuredTextDocument | Node | null | undefined;
  }]
}



export async function getStaticProps() {
  const { allHomeAbouts } = await getDatoContent({
    query: HOME_ABOUT_US,
    preview: ''
  });


  return {
    props: { allHomeAbouts }
  };
}

export default function AboutUs({ allHomeAbouts }: HomeAboutUsProps) {
  //const about = aboutUs
  return (
    <Layout>
      <Container sx={{
        paddingTop: 5,
        height: '100vh'
      }}>
        <section style={{ height: '100vh' }} id='about-us'>
          {
            allHomeAbouts.map(data =>
              <Box key={data.title} maxWidth='xl'>
                <Box sx={{
                  display: 'block',
                  flexGrow: 1,
                }}>
                  <Typography fontSize={20} fontWeight="bold" color="primary.main">
                    {data.title}
                  </Typography>

                  <Box sx={{
                    display: 'flex',
                    flexWrap: 2,
                    width: '50%',


                  }}>
                    <StructuredText data={data.content} />
                  </Box>
                </Box>

              </Box>
            )
          }
        </section>
      </Container>
    </Layout>
  );
}