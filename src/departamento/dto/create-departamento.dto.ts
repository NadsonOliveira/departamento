import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDepartamentoDto {
  @IsNotEmpty()
  idEmpresa: string;

  @IsNotEmpty()
  dsDepartamento: string;

  @IsNotEmpty()
  flSituacao: number;

  @ApiProperty()
  dtCadastro: Date;

  @ApiProperty()
  idUsuarioCadastro: string;

  @ApiProperty()
  dataAlteracao: Date;

  @ApiProperty()
  idUsuarioAlteracao: string;
}
