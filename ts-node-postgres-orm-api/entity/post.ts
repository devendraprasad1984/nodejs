import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm'
import {Category} from "./category";

@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title: string

    @Column('text')
    text: string

    @ManyToMany(type=>Category)
    @JoinTable()
    category: Category[]
}
