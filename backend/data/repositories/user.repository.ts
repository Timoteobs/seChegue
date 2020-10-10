import { Op } from 'sequelize';
import { IUserRepository } from '../interfaces/IRepositories/userRepository.interface';
import User from '../model/user.model';

export class UserRepository implements IUserRepository {
  
  getByName(name: string): Promise<User[]> {
    return new Promise((resolve, reject) => {
      User.findAll({
        where: {
          name: {
            [Op.like]: `${name}%`
          },
        }
    })
      .then(result => {
        resolve(result);
      }
      )
      .catch(error => {
        reject(error);
      });
    });
  }
 
  getByEmail(_email: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  getById(_id: number): Promise<User> {
    throw new Error('Method not implemented.');
  }
  toList(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  save(user: User): Promise<any> {
    throw new Error('Method not implemented.');
  }
  update(user: User): Promise<any> {
    throw new Error('Method not implemented.');
  }
  delete(_id: number): Promise<any> {
    throw new Error('Method not implemented.');
  }

}