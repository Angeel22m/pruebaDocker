import { Controller, Get } from "@nestjs/common";
import { get } from "http";
import { PacienteService } from "src/servicios/pacientes.service";

@Controller('pacientes')
export class PacientesController {
    constructor(private readonly pacientesService: PacienteService){}


    @Get()
    getAll(){
        return this.pacientesService.findAll();
    }
}