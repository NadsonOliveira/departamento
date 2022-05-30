import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'departamento' })
export class DepartamentoEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'ID_DEPARTAMENTO' })
  id: string;

  @Column({ name: 'ID_EMPRESA' })
  idEmpresa: string;

  @Column({ name: 'CD_DEPARTAMENTO' })
  @Generated()
  cdDepartamento?: number;

  @Column({ name: 'DS_DEPARTAMENTO ' })
  dsDepartamento: string;

  @Column({ name: 'FL_SITUACAO' })
  flSituacao: number;

  @CreateDateColumn({ name: 'DT_CADASTRO' })
  dtCadastro: Date;

  @Column({ name: 'ID_USUARIO_CADASTRO' })
  idUsuarioCadastro: string;

  @UpdateDateColumn({ name: 'DT_ALTERACAO' })
  dataAlteracao: Date;

  @Column({ name: 'ID_USUARIO_ALTERACAO' })
  idUsuarioAlteracao: string;
}
