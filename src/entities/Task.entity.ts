import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Category } from './Category.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title?: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ default: false })
  completed?: boolean;

  @Column({nullable: true})
  category?: string;

  @ManyToOne(() => User, (user) => user.tasks)
  user?: User;

  /*@ManyToOne(() => Category, (category) => category.tasks)
  category?: Category;*/
}
