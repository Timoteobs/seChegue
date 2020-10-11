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

  getById(_id: number): Promise<LifeProject> {
    throw new Error("Method not implemented.");
  }
  toList(): Promise<LifeProject[]> {
    throw new Error("Method not implemented.");
  }

  save(lifeProject: LifeProject): Promise<any> {
    return new Promise((resolve, reject) => {
      this.repository.getByName(lifeProject.wishes)
        .then(async (found: LifeProject) => {
          if (!Attributes.IsValid(found)) {
            this.repository.save(lifeProject)
              .then(result => resolve(result))
              .catch(async (error: any) =>
                reject(error));
          } else {
            reject(undefined);
          }
        });
    });
  }

  update(lifeProject: LifeProject): Promise<any> {
    throw new Error("Method not implemented.");
  }
  delete(_id: number): Promise<any> {
    throw new Error("Method not implemented.");
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
