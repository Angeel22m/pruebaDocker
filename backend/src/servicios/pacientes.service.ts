import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Paciente } from "src/entidad/paciente.entity";

@Injectable()
export class PacienteService{
    constructor(
        @InjectRepository(Paciente)
        private pacienteRepo: Repository<Paciente>,
    ){}

    // Obtener todos
    findAll(): Promise<Paciente[]>{
        return this.pacienteRepo.find();
    }

    // Obtener por ID
    async findOne(id: number): Promise<Paciente> {
        const paciente = await this.pacienteRepo.findOneBy({ id });
        if (!paciente) throw new NotFoundException(`Paciente con id ${id} no encontrado`);
        return paciente;
    }

    // Crear
    create(pacienteData: Partial<Paciente>): Promise<Paciente> {
        const paciente = this.pacienteRepo.create(pacienteData);
        return this.pacienteRepo.save(paciente);
    }

    // Actualizar
    async update(id: number, pacienteData: Partial<Paciente>): Promise<Paciente> {
        const paciente = await this.findOne(id);
        Object.assign(paciente, pacienteData);
        return this.pacienteRepo.save(paciente);
    }

    // Eliminar
    async remove(id: number): Promise<void> {
        const paciente = await this.findOne(id);
        await this.pacienteRepo.remove(paciente);
    }
}
