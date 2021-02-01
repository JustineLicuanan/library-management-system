import { gql } from 'graphql-request';
import { useMutation, useQueryClient } from 'react-query';

import { MeData } from './useQueryAuth';
import { client } from '../graphqlClient';

export interface Credentials {
	email: string;
	password: string;
}

export const useMutationLogin = () => {
	const queryClient = useQueryClient();

	return useMutation(
		async ({ email, password }: Credentials) => {
			const { login } = await client.request(
				gql`
					mutation {
						login(input: { email: "${email}", password: "${password}" }) {
							email
						}
					}
				`
			);

			return login as MeData;
		},
		{
			onSuccess: (data) => {
				queryClient.setQueryData('/me', data);
			},
		}
	);
};
