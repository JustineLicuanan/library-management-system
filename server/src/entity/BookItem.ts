import { Column, Entity } from 'typeorm';

import { Book } from './Book';

export enum BookFormat {
	HARDCOVER = 'HARDCOVER',
	PAPERBACK = 'PAPERBACK',
	AUDIO_BOOK = 'AUDIO_BOOK',
	EBOOK = 'EBOOK',
	NEWSPAPER = 'NEWSPAPER',
	MAGAZINE = 'MAGAZINE',
	JOURNAL = 'JOURNAL',
}

export enum BookStatus {
	AVAILABLE = 'AVAILABLE',
	RESERVED = 'RESERVED',
	LOANED = 'LOANED',
	LOST = 'LOST',
}

@Entity()
export class BookItem extends Book {
	@Column('text', { unique: true })
	barcode: string;

	@Column()
	isReferenceOnly: boolean;

	@Column()
	borrowed: Date;

	@Column()
	dueDate: Date;

	@Column('numeric', { precision: 2 })
	price: number;

	@Column('text')
	format: BookFormat;

	@Column('text')
	status: BookStatus;

	@Column()
	dateOfPurchase: Date;

	@Column()
	publicationDate: Date;
}
