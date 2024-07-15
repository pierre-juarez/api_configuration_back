import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_configuracion' })
export class Configuration {
  @PrimaryGeneratedColumn()
  idConfig: number;

  @Column()
  clave: String;

  @Column()
  valor: String;

  @Column()
  ambiente: String;

  @Column()
  type_request: String;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Column()
  idCliente: number;
}
