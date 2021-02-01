import { gql } from 'graphql-request';
import { useMutation, useQueryClient } from 'react-query';

import { client } from '../graphqlClient';

export const useMutationLogout = () => {
	const queryClient = useQueryClient();

	return useMutation(
		async () => {
			const { logout } = await client.request(
				gql`
					mutation {
						logout
					}
				`
			);

			return logout as boolean;
		},
		{
			onSuccess: (data) => {
				queryClient.setQueryData('/me', null);
			},
		}
	);
};
