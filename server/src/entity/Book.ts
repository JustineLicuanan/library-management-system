import { Column, JoinTable, ManyToMany } from 'typeorm';

import { Author } from './Author';
import { ExtendedBaseEntity } from './Base';

export abstract class Book extends ExtendedBaseEntity {
	@Column('text')
	ISBN: string;

	@Column('text')
	title: string;

	@Column('text')
	subject: string;

	@Column('text')
	publisher: string;

	@Column('text')
	language: string;

	@Column()
	numberOfPages: number;

	@ManyToMany(() => Author, (author) => author.books)
	@JoinTable()
	authors: Author[];
}
