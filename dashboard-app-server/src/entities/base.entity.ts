import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class StandardEntity {
    @PrimaryGeneratedColumn()
    id: number;
}