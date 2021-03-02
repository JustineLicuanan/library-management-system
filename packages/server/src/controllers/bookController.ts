import { RequestHandler } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

import { Book } from '../entity/Book';

export const POST_addBook: RequestHandler<
	ParamsDictionary,
	any,
	Book
> = async () => {
	//
};

export const GET_books = async () => {
	//
};

export const GET_book = async () => {
	//
};

export const PATCH_updateBook: RequestHandler<
	ParamsDictionary,
	any,
	Book
> = async () => {
	//
};

export const DELETE_deleteBook = async () => {
	//
};
