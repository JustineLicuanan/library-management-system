import { PrimaryColumn, BaseEntity } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export abstract class ExtendedBaseEntity extends BaseEntity {
	@PrimaryColumn('text')
	id = uuidv4();
}
