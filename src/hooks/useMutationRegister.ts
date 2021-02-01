import { gql } from 'graphql-request';
import { useMutation, useQueryClient } from 'react-query';

import { MeData } from './useQueryAuth';
import { client } from '../graphqlClient';

export interface Credentials {
	email: string;
	password: string;
}

export const useMutationRegister = () => {
	const queryClient = useQueryClient();

	return useMutation(
		async ({ email, password }: Credentials) => {
			const { register } = await client.request(
				gql`
					mutation {
						register(input: { email: "${email}", password: "${password}" }) {
							email
						}
					}
				`
			);

			return register as MeData;
		},
		{
			onSuccess: (data) => {
				queryClient.setQueryData('/me', data);
			},
		}
	);
};
