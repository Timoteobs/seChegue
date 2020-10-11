import { injectable, inject } from "inversify";
import TYPES from "../types";
import { IRoomsService } from "../interfaces/IServices/roomsServices.interface";
import { IRoomsRepository } from "../interfaces/IRepositories/rooms.Repository.interface";
import  Rooms  from "../model/rooms.model";
import Attributes from "../attributes";

@injectable()
export class RoomsService implements IRoomsService {

  constructor(
    @inject(TYPES.IRoomsRepository) private repository: IRoomsRepository
  ) {}

  getByEmail(email: string): Promise<Rooms> {
    return new Promise((resolve, reject) => {
      this.repository.getByEmail(email)
        .then(async (result: Rooms) => {
          const _result: any = result.ToModify();
          resolve(_result);
        }).catch(async (error: any) =>
          reject(error));
    });
  }

  getById(_id: number): Promise<Rooms> {
    throw new Error("Method not implemented.");
  }
  toList(): Promise<Rooms[]> {
    throw new Error("Method not implemented.");
  }

  save(rooms: Rooms): Promise<any> {
    return new Promise((resolve, reject) => {
      this.repository.getByName(rooms.name)
        .then(async (found: Rooms) => {
          if (!Attributes.IsValid(found)) {
            this.repository.save(rooms)
              .then(result => resolve(result))
              .catch(async (error: any) =>
                reject(error));
          } else {
            reject(undefined);
          }
        });
    });
  }

  update(rooms: Rooms): Promise<any> {
    throw new Error("Method not implemented.");
  }
  delete(_id: number): Promise<any> {
    throw new Error("Method not implemented.");
  }

  getByName(name: string): Promise<Rooms[]> {
    return new Promise((resolve, reject) => {
      this.repository.getByName(name)
        .then(async (result: Rooms[]) => {
          resolve(result);
        }).catch(async (error: any) =>
          reject(error));
    });
  }
}
