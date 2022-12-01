import { GraphQLClient } from "graphql-request";

//query, variables, includeDrafts, excludeInvalid

export function getDatoContent({ query, preview }) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`
  const headers = {
    authorization: 'Bearer 1e79c7a590e61d49b79ef142890766'//`Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,

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