import  LifeProject  from '../../model/lifeProject.model';

export interface ILifeProjectRepository {
  getByName(name: string): Promise<LifeProject[]>;
  getByEmail(_email: string): Promise<LifeProject>;
  getById(_id: number): Promise<LifeProject>;
  toList(): Promise<LifeProject[]>;
  save(lifeProject: LifeProject): Promise<any>;
  update(lifeProject: LifeProject): Promise<any>;
  delete(_id: number): Promise<any>;
}