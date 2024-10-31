import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'log_error' })
export class Log {
  @PrimaryGeneratedColumn() // Genera automáticamente un ID incremental
  id: number;

  @Column()
  tag: string; // Tipo String debe ser 'string' en TypeScript

  @Column('text') // Usar 'text' para un mensaje largo
  message: string;

  @Column('text', { nullable: true }) // Permite que sea nulo
  stackTrace?: string;

  @CreateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date; // Fecha de creación, se inicializa automáticamente
}
