import { injectable, inject } from "inversify";
import TYPES from "../types";
import { IRoomsService } from "../interfaces/IServices/roomsServices.interface";
import { IRoomsRepository } from "../interfaces/IRepositories/rooms.Repository.interface";
import Rooms from "../model/rooms.model";
import Attributes from "../attributes";

@injectable()
export class RoomsService implements IRoomsService {

  constructor(
    @inject(TYPES.IRoomsRepository) private repository: IRoomsRepository
  ) { }

  getById(id: number): Promise<Rooms> {
    return new Promise((resolve, reject) => {
      this.repository.getById(id)
        .then((result: Rooms) => resolve(result))
        .catch(async (error: any) =>
          reject((error)));
    });
  }

  toList(): Promise<Rooms[]> {
    return new Promise((resolve, reject) => {
      this.repository.toList()
        .then((result: any) => resolve(result))
        .catch(async (error: any) =>
          reject((error)));
    });
  }

  save(rooms: Rooms): Promise<any> {
    return new Promise((resolve, reject) => {
      this.repository.save(rooms)
        .then(async (result: any) => resolve(result))
        .catch(async (error: any) =>
          reject(error));
    });
  }

  update(rooms: Rooms): Promise<any> {
    return new Promise((resolve, reject) => {
      this.repository.update(rooms)
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
