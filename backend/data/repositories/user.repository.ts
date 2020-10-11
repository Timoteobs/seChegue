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
    return new Promise((resolve, reject) => {
      User.findOne({
        where: {
          email: {
            [Op.eq]: _email
          }
        }
      }).then((result: User) => {
        resolve(result);
      }).catch(error => {
        reject(error);
      });
    });
  }

  getById(_id: number): Promise<User> {
    throw new Error('Method not implemented.');
  }
  toList(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }

  save(user: User): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const _transaction = await User.sequelize.transaction();
      User.create(user, { transaction: _transaction })
        .then(async result => {
          await _transaction.commit();
          resolve(result);
        }).catch(async error => {
          await _transaction.rollback();
          reject(error);
        });
    });
  }

  update(user: User): Promise<any> {
    throw new Error('Method not implemented.');
  }
  delete(_id: number): Promise<any> {
    throw new Error('Method not implemented.');
  }

}