import { Module } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { DepartamentoController } from './departamento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartamentoEntity } from './entities/departamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DepartamentoEntity])],
  controllers: [DepartamentoController],
  providers: [DepartamentoService],
})
export class DepartamentoModule {}
