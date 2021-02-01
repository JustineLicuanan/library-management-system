import { gql } from 'graphql-request';
import { useQuery } from 'react-query';

import { client } from '../graphqlClient';

export interface MeData {
	id?: string;
	email?: string;
}

export const useQueryAuth = () => {
	return useQuery('/me', async () => {
		const { me } = await client.request(
			gql`
				{
					me {
						email
					}
				}
			`
		);

		return me as MeData | null;
	});
};
