import { injectable, inject } from "inversify";
import TYPES from "../types";
import { IUserService } from "../interfaces/IServices/userServices.interface";
import { IUserRepository } from "../interfaces/IRepositories/userRepository.interface";
import  User  from "../model/user.model";
import Attributes from "../attributes";

@injectable()
export class UserService implements IUserService {

  constructor(
    @inject(TYPES.IUserRepository) private repository: IUserRepository
  ) {}

  getByEmail(email: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.repository.getByEmail(email)
        .then(async (result: User) => {
          const _result: any = result.ToModify();
          resolve(_result);
        }).catch(async (error: any) =>
          reject(error));
    });
  }

  getById(id: number): Promise<User> {
    return new Promise((resolve, reject) => {
      this.repository.getById(id)
        .then((result: User) => resolve(result))
        .catch(async (error: any) =>
          reject((error)));
    });
  }

  toList(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      this.repository.toList()
        .then((result: any) => resolve(result))
        .catch(async (error: any) =>
          reject((error)));
    });
  }

  save(user: User): Promise<any> {
    return new Promise((resolve, reject) => {
      this.repository.getByEmail(user.email)
        .then(async (found: User) => {
          if (!Attributes.IsValid(found)) {
            this.repository.save(user)
              .then(result => resolve(result))
              .catch(async (error: any) =>
                reject(error));
          } else {
            reject(undefined);
          }
        });
    });
  }

  update(user: User): Promise<any> {
    return new Promise((resolve, reject) => {
      this.repository.update(user)
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

  getByName(name: string): Promise<User[]> {
    return new Promise((resolve, reject) => {
      this.repository.getByName(name)
        .then(async (result: User[]) => {
          resolve(result);
        }).catch(async (error: any) =>
          reject(error));
    });
  }
}
