import { RequestHandler } from 'express';
import { BookItem } from '../entity/BookItem';

export const POST_add: RequestHandler = async (req, res) => {
	const bookItemExists = await BookItem.findOne({ barcode: req.body.barcode });

	if (bookItemExists) {
		res.status(400).json({
			errors: [
				{
					path: 'barcode',
					message: 'barcode is already used',
				},
			],
		});

		return;
	}

	const bookItem = BookItem.create(req.body as BookItem);
	await bookItem.save();

	res.json({ bookItem });
};

export const GET_slash: RequestHandler = async () => {
	// res.json({ bookItem });
};

export const PATCH_update: RequestHandler = async () => {
	//
};

export const DELETE_delete: RequestHandler = async () => {
	//
};
