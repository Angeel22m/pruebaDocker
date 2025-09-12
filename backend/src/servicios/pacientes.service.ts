import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Paciente } from "src/entidad/paciente.entity";

@Injectable()
export class PacienteService{
    constructor(
        @InjectRepository(Paciente)
        private pacienteRepo: Repository<Paciente>,

    ){}

    findAll(): Promise<Paciente[]>{
        return this.pacienteRepo.find();
    }
}