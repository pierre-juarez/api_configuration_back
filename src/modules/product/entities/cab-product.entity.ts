import { Entity, Column, ViewEntity } from 'typeorm';

@ViewEntity({ name: 'vw_producto' })
export class CabProduct {
  @Column({ type: 'varchar', length: 50 })
  producto: string;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    name: 'PRECIOCOSTO_siva',
  })
  precioCostoSiva: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    name: 'PRECIOBANCO_civa',
  })
  precioBancoCiva: number;

  @Column({ type: 'datetime', nullable: true, name: 'fechacompra' })
  fechaCompra: Date;

  @Column({ type: 'datetime', nullable: true, name: 'fechaing' })
  fechaIng: Date;

  @Column({ type: 'datetime', nullable: true, name: 'fechaingCD' })
  fechaIngCD: Date;

  @Column({ type: 'datetime', nullable: true, name: 'fechaingTD' })
  fechaIngTD: Date;

  @Column({ type: 'varchar', length: 100, nullable: true, name: 'proveedor' })
  proveedor: string;

  @Column({ type: 'varchar', length: 100, nullable: true, name: 'PROCEDENCIA' })
  procedencia: string;

  @Column({ type: 'varchar', length: 100, nullable: true, name: 'TALLAS' })
  tallas: string;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'MATERIAL 1' })
  material1: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    name: 'PRESENTACION ACCESORIO',
  })
  presentacionAccesorio: string;

  @Column({ type: 'text', nullable: true, name: 'DETALLE ARTICULO' })
  detalleArticulo: string;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'MODELO' })
  modelo: string;

  @Column({ type: 'varchar', length: 20, nullable: true, name: 'COLOR 1' })
  color1: string;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'CATEGORIA' })
  categoria: string;

  @Column({ type: 'varchar', length: 20, nullable: true, name: 'COLOR FORRO' })
  colorForro: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    name: 'TIPO CONSTRUCCION',
  })
  tipoConstruccion: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    name: 'CATEGORIA WEB',
  })
  categoriaWeb: string;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'GENERO WEB' })
  generoWeb: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
    name: 'COLOR PLANTILLA',
  })
  colorPlantilla: string;

  @Column({ type: 'varchar', length: 20, nullable: true, name: 'ALTURA CANA' })
  alturaCana: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    name: 'ACABADO CAPELLADA',
  })
  acabadoCapellada: string;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'USO' })
  uso: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    name: 'MATERIAL FORRO',
  })
  materialForro: string;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'ESTILO TACO' })
  estiloTaco: string;

  @Column({ type: 'text', nullable: true, name: 'DETALLE PLANTA' })
  detallePlanta: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
    name: 'UNIDAD DE MEDIDA',
  })
  unidadDeMedida: string;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'MATERIAL 2' })
  material2: string;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'MATERIAL 3' })
  material3: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    name: 'GRUPO DE ARTICULOS',
  })
  grupoDeArticulos: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    name: 'TIPO DE ARTICULO',
  })
  tipoDeArticulo: string;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'MARCA' })
  marca: string;

  @Column({ type: 'varchar', length: 20, nullable: true, name: 'COLOR 2' })
  color2: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    name: 'MATERIAL HUELLA',
  })
  materialHuella: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    name: 'MATERIAL PLANTILLA',
  })
  materialPlantilla: string;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'CONSTRUCCION' })
  construccion: string;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'TIPO HORMA' })
  tipoHorma: string;

  @Column({ type: 'varchar', length: 20, nullable: true, name: 'GENERO' })
  genero: string;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'ESTILO WEB' })
  estiloWeb: string;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'OCASION' })
  ocasion: string;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'ESTILO PUNTA' })
  estiloPunta: string;

  @Column({ type: 'varchar', length: 20, nullable: true, name: 'COLOR PLANTA' })
  colorPlanta: string;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'LINEA' })
  linea: string;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'TEMPORADA' })
  temporada: string;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'TIPO HUELLA' })
  tipoHuella: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    name: 'MATERIAL PLANTA',
  })
  materialPlanta: string;

  @Column({ type: 'varchar', length: 20, nullable: true, name: 'COLOR 3' })
  color3: string;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'urlimagen' })
  urlImagen: string;
}
