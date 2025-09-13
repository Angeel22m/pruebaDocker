import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePacienteDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    apellido: string;
}
