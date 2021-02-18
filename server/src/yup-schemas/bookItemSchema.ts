import { array, boolean, date, number, object, string } from 'yup';

export const add = object().shape({
	ISBN: string().trim().required(),
	title: string().trim().required(),
	subject: string().trim().required(),
	publisher: string().trim().required(),
	language: string().trim().required(),
	numberOfPages: number().integer().required(),
	authors: array().of(object().shape({ id: string().trim().required() })),
	barcode: string().trim().required(),
	isReferenceOnly: boolean().required(),
	borrowed: date().required(),
	dueDate: date().required(),
	price: number().required(),
	format: string().trim().required(),
	status: string().trim().required(),
	dateOfPurchase: date().required(),
	publicationDate: date().required(),
});
