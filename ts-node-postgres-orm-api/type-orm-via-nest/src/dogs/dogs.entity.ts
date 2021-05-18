import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Dog{
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    name: string

    @Column()
    age: number

    @Column({nullable: true, length: 100})
    bread: string
}
