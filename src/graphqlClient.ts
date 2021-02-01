import { GraphQLClient } from 'graphql-request';

import { myMeta } from './meta';

export const client = new GraphQLClient(myMeta.graphqlEndpoint, {
	credentials: 'include',
});
