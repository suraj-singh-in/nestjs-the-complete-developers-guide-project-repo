// Libraries
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
} from 'typeorm';

// import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  // @Exclude()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Insertd User with ID:', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User with ID:', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed User with ID:', this.id);
  }
}
