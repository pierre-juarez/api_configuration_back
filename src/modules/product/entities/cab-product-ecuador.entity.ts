import { Entity, Column, ViewEntity } from 'typeorm';

@ViewEntity({ name: 'vw_producto' })
export class CabProductEcuador {

  @Column({ type: 'varchar', length: 250, name: 'producto' })
  sku: string;

  @Column({ type: 'varchar', length: 250, name: 'nombre' })
  description: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    name: 'PRECIOBANCO_civa',
  })
  price: number;

  @Column({ type: 'datetime', name: 'fechaing' })
  dateEntry: Date;

  @Column({ type: 'varchar', length: 250, nullable: true, name: 'TALLAS' })
  size: string;

  @Column({
    type: 'varchar',
    length: 250,
    name: 'GRUPO DE ARTICULOS',
  })
  category: string;

  @Column({
    type: 'varchar',
    length: 250,
    name: 'TIPO DE ARTICULO',
  })
  subcategory: string;

  @Column({ type: 'varchar', length: 255,  name: 'urlimagen' })
  urlImage: string;
}
