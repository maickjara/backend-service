import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn ()
    id!: number;

    @Column()
    name!:string;

    @Column("text")
    decription!:string;

    @Column("decimal")
    pricel!: number;
    price: any;
    description: any;
}