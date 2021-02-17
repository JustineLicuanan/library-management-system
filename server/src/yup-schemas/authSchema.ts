import { object, string } from 'yup';

export const register = object().shape({
	name: string().trim().required(),
	email: string().required().email(),
	password: string().required().min(6),
	address: object().shape({
		streetAddress: string().trim().required(),
		city: string().trim().required(),
		state: string().trim().required(),
		zipCode: string().trim().required(),
		country: string().trim().required(),
	}),
	phone: string().trim().required(),
});

export const login = object().shape({
	email: string().required().email(),
	password: string().required(),
});
