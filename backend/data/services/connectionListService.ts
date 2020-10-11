import { injectable, inject } from "inversify";
import TYPES from "../types";
import { IConnectionListService } from "../interfaces/IServices/connectionListServices.interface";
import { IConnectionListRepository } from "../interfaces/IRepositories/connectionList.Repository.interface";
import ConnectionList from "../model/connectionList.model";
import Attributes from "../attributes";

@injectable()
export class ConnectionListService implements IConnectionListService {

  constructor(
    @inject(TYPES.IConnectionListRepository) private repository: IConnectionListRepository
  ) { }

  getById(id: number): Promise<ConnectionList> {
    return new Promise((resolve, reject) => {
      this.repository.getById(id)
        .then((result: ConnectionList) => resolve(result))
        .catch(async (error: any) =>
          reject((error)));
    });
  }

  toList(): Promise<ConnectionList[]> {
    return new Promise((resolve, reject) => {
      this.repository.toList()
        .then((result: any) => resolve(result))
        .catch(async (error: any) =>
          reject((error)));
    });
  }

  save(connectionList: ConnectionList): Promise<any> {
    return new Promise((resolve, reject) => {
      this.repository.save(connectionList)
        .then(async (result: any) => resolve(result))
        .catch(async (error: any) =>
          reject(error));
    });
  }

  update(connectionList: ConnectionList): Promise<any> {
    return new Promise((resolve, reject) => {
      this.repository.update(connectionList)
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

  getByName(name: string): Promise<ConnectionList[]> {
    return new Promise((resolve, reject) => {
      this.repository.getByName(name)
        .then(async (result: ConnectionList[]) => {
          resolve(result);
        }).catch(async (error: any) =>
          reject(error));
    });
  }
}
