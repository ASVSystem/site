import { GraphQLClient } from "graphql-request";

//query, variables, includeDrafts, excludeInvalid

export function getDatoContent({ query, preview }) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`
  const headers = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,

  };

  // if (includeDrafts) {
  //   headers['X-Include-Drafts'] = 'true';
  // }
  // if (excludeInvalid) {
  //   headers['X-Exclude-Invalid'] = 'true';
  // }

  const client = new GraphQLClient(endpoint, { headers });

  return client.request(query);

}