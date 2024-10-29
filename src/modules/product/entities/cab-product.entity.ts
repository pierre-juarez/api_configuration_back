import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'vw_producto' })
export class CabProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  producto: string;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precioCostoSiva: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precioBancoCiva: number;

  @Column({ type: 'datetime', nullable: true })
  fechaCompra: Date;

  @Column({ type: 'datetime', nullable: true })
  fechaIng: Date;

  @Column({ type: 'datetime', nullable: true })
  fechaIngCD: Date;

  @Column({ type: 'datetime', nullable: true })
  fechaIngTD: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  proveedor: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  procedencia: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  tallas: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  material1: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  presentacionAccesorio: string;

  @Column({ type: 'text', nullable: true })
  detalleArticulo: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  modelo: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  color1: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  categoria: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  colorForro: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  tipoConstruccion: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  categoriaWeb: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  generoWeb: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  colorPlantilla: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  alturaCana: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  acabadoCapellada: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  uso: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  materialForro: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  estiloTaco: string;

  @Column({ type: 'text', nullable: true })
  detallePlanta: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  unidadDeMedida: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  material2: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  material3: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  grupoDeArticulos: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  tipoDeArticulo: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  marca: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  color2: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  materialHuella: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  materialPlantilla: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  construccion: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  tipoHorma: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  genero: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  estiloWeb: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  ocasion: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  estiloPunta: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  colorPlanta: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  linea: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  temporada: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  tipoHuella: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  materialPlanta: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  color3: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  urlImagen: string;
}
