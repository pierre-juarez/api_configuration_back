import { Column, ViewEntity } from 'typeorm';

@ViewEntity({ name: 'vw_Producto' })
export class CabProductPeru {
  @Column({ type: 'varchar', length: 11, name: 'producto' })
  sku: string;

  @Column({ type: 'varchar', length: 200, name: 'nombre' })
  description: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    name: 'precio',
  })
  price: number;

  @Column({ type: 'datetime', nullable: true, name: 'fechaingreso' })
  dateEntry: Date;

  @Column({
    type: 'nvarchar',
    length: 2,
    name: 'talla'
  })
  size: string;

  @Column({
    type: 'nvarchar',
    length: 100,
    name: 'nombre_categoria',
  })
  category: string;

  @Column({
    type: 'nvarchar',
    length: 100,
    name: 'nombre_tipoarticulo',
  })
  subcategory: string;

  @Column({
    type: 'varchar',
    length: 200,
    name: 'urlimagen',
  })
  urlImage: string;
}
