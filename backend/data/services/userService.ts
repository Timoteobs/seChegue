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

  getById(_id: number): Promise<User> {
    throw new Error("Method not implemented.");
  }
  toList(): Promise<User[]> {
    throw new Error("Method not implemented.");
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
    throw new Error("Method not implemented.");
  }
  delete(_id: number): Promise<any> {
    throw new Error("Method not implemented.");
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
