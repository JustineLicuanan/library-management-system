import { Column, Entity, ManyToMany } from 'typeorm';

import { ExtendedBaseEntity } from './Base';
import { BookItem } from './BookItem';

@Entity()
export class Author extends ExtendedBaseEntity {
	@Column('text')
	name: string;

	@Column('text')
	description: string;

	@ManyToMany(() => BookItem, (bookItem) => bookItem.authors)
	books: BookItem[];
}
