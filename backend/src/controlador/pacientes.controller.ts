import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from "@nestjs/common";
import { PacienteService } from "src/servicios/pacientes.service";
import { Paciente } from "src/entidad/paciente.entity";
import { CreatePacienteDto } from "src/dto/create-paciente.dto";
import { UpdatePacienteDto } from "src/dto/update-paciente.dto";

@Controller('pacientes')
export class PacientesController {
    constructor(private readonly pacientesService: PacienteService){}

    @Get()
    getAll(): Promise<Paciente[]>{
        return this.pacientesService.findAll();
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number): Promise<Paciente> {
        return this.pacientesService.findOne(id);
    }

    @Post()
    create(@Body() createPacienteDto: CreatePacienteDto): Promise<Paciente> {
        return this.pacientesService.create(createPacienteDto);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updatePacienteDto: UpdatePacienteDto): Promise<Paciente> {
        return this.pacientesService.update(id, updatePacienteDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.pacientesService.remove(id);
    }
}
