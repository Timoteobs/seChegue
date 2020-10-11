import { injectable, inject } from "inversify";
import TYPES from "../types";
import { ILifeProjectService } from "../interfaces/IServices/lifeProjectServices.interface";
import { ILifeProjectRepository } from "../interfaces/IRepositories/lifeProject.Repository.interface";
import  lifeProject  from "../model/lifeProject.model";
import Attributes from "../attributes";
import LifeProject from "../model/lifeProject.model";
import { LifeProjectRepository } from "../repositories/lifeProject.repository";

@injectable()
export class LifeProjectService implements ILifeProjectService {

  constructor(
    @inject(TYPES.ILifeProjectRepository) private repository: ILifeProjectRepository
  ) {}

  getById(id: number): Promise<LifeProject> {
    return new Promise((resolve, reject) => {
      this.repository.getById(id)
        .then((result: LifeProject) => resolve(result))
        .catch(async (error: any) =>
          reject((error)));
    });
  }
  toList(): Promise<LifeProject[]> {
    return new Promise((resolve, reject) => {
      this.repository.toList()
        .then((result: any) => resolve(result))
        .catch(async (error: any) =>
          reject((error)));
    });
  }

  save(lifeProject: LifeProject): Promise<any> {
    return new Promise((resolve, reject) => {
      this.repository.save(lifeProject)
        .then(async (result: any) => resolve(result))
        .catch(async (error: any) =>
          reject(error));
    });
  }

  update(lifeProject: LifeProject): Promise<any> {
    return new Promise((resolve, reject) => {
      this.repository.update(lifeProject)
        .then(result => resolve(result))
        .catch(async (error: any) =>
          reject(error))
    })
  }
  
  delete(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.repository.delete(id)
        .then((result: any) => resolve(result))
        .catch(async (error: any) =>
          reject((error)));
    });
  }

  getByName(name: string): Promise<LifeProject[]> {
    return new Promise((resolve, reject) => {
      this.repository.getByName(name)
        .then(async (result: LifeProject[]) => {
          resolve(result);
        }).catch(async (error: any) =>
          reject(error));
    });
  }
}
