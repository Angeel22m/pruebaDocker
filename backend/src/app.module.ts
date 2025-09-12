import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Paciente } from './entidad/paciente.entity';
import { PacienteService } from './servicios/pacientes.service';
import { PacientesController } from './controlador/pacientes.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // disponible en toda la app
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DATABASE_HOST'),
        port: config.get<number>('DATABASE_PORT'),
        username: config.get<string>('DATABASE_USER'),
        password: config.get<string>('DATABASE_PASSWORD'),
        database: config.get<string>('DATABASE_NAME'),
        autoLoadEntities: true,
        synchronize: true, //  solo en desarrollo
      }),
    }),
    TypeOrmModule.forFeature([Paciente]),
  ],
  controllers: [PacientesController],
  providers: [PacienteService],
})
export class AppModule {}
