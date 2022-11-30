import * as React from 'react';

import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

import { getDatoContent } from '../lib/datocms'
import { StructuredText, StructuredTextDocument } from 'react-datocms';
import { Layout } from '../components/Layout';

const PRIVACY_POLICY_PAGE = `query MyQuery {
  allPolicyPrivacies {
    title
    content {
      value
    }
  }
}
`;

interface AllPolicyPrivacyProps {
  allPolicyPrivacies: [{
    title: string;
    content: Document | StructuredText<any, any> | StructuredTextDocument | Node | null | undefined;
  }]
}



export async function getStaticProps() {
  const { allPolicyPrivacies } = await getDatoContent({
    query: PRIVACY_POLICY_PAGE,
    preview: ''
  });


  return {
    props: { allPolicyPrivacies }
  };
}

export default function PrivacyPolicy({ allPolicyPrivacies }: AllPolicyPrivacyProps) {
  const policy = allPolicyPrivacies

  return (
    <Layout>
      <Container sx={{
        paddingTop: 2,
        height: '100vh'
      }}>
        <section style={{ height: '100vh', marginTop: 20 }} id='easy-cds'>

          {policy.map(content =>
            <Container key={content.title} maxWidth="xl">


              <Typography >{content.title}</Typography>
              <Typography marginBottom={5}>Last modified: November 12th, 2022.</Typography>

              <StructuredText data={content.content} />

            </Container>
          )}
        </section>
      </Container>
    </Layout>
  );
}