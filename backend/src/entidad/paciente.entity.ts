import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('pacientes')
export class Paciente{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

}