import { injectable, inject } from "inversify";
import TYPES from "../types";
import { IConnectionListService } from "../interfaces/IServices/connectionListServices.interface";
import { IConnectionListRepository } from "../interfaces/IRepositories/connectionList.Repository.interface";
import  ConnectionList  from "../model/connectionList.model";
import Attributes from "../attributes";

@injectable()
export class ConnectionListService implements IConnectionListService {

  constructor(
    @inject(TYPES.IConnectionListRepository) private repository: IConnectionListRepository
  ) {}

  getById(_id: number): Promise<ConnectionList> {
    throw new Error("Method not implemented.");
  }
  toList(): Promise<ConnectionList[]> {
    throw new Error("Method not implemented.");
  }

  save(connectionList: ConnectionList): Promise<any> {
    return new Promise((resolve, reject) => {
      this.repository.getByEmail(connectionList.email)
        .then(async (found: ConnectionList) => {
          if (!Attributes.IsValid(found)) {
            this.repository.save(connectionList)
              .then(result => resolve(result))
              .catch(async (error: any) =>
                reject(error));
          } else {
            reject(undefined);
          }
        });
    });
  }

  update(connectionList: ConnectionList): Promise<any> {
    throw new Error("Method not implemented.");
  }
  delete(_id: number): Promise<any> {
    throw new Error("Method not implemented.");
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
