import  User  from '../../model/user.model';

export interface IUserRepository {
  getByName(name: string): Promise<User[]>;
  getByEmail(_email: string): Promise<any>;
  getById(_id: number): Promise<User>;
  toList(): Promise<User[]>;
  save(user: User): Promise<any>;
  update(user: User): Promise<any>;
  delete(_id: number): Promise<any>;
}