import { Op } from 'sequelize';
import { IConnectionListRepository } from '../interfaces/IRepositories/connectionList.Repository.interface';
import ConnectionList from '../model/connectionList.model';

export class ConnectionListRepository implements IConnectionListRepository {
  
  getByName(name: string): Promise<ConnectionList[]> {
    return new Promise((resolve, reject) => {
      ConnectionList.findAll({
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
 
  getByEmail(_email: string): Promise<ConnectionList> {
    return new Promise((resolve, reject) => {
      ConnectionList.findOne({
        where: {
          email: {
            [Op.eq]: `${_email}%`
          }
        }
      })
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
    });
  }

  getById(_id: number): Promise<ConnectionList> {
    throw new Error('Method not implemented.');
  }
  toList(): Promise<ConnectionList[]> {
    throw new Error('Method not implemented.');
  }

  save(connectionList: ConnectionList): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const _transaction = await ConnectionList.sequelize.transaction();
      ConnectionList.create(ConnectionList, { transaction: _transaction })
        .then(async result => {
          await _transaction.commit();
          resolve(result);
        }).catch(async error => {
          await _transaction.rollback();
          reject(error);
        });
    });
  }

  update(connectionList: ConnectionList): Promise<any> {
    throw new Error('Method not implemented.');
  }
  delete(_id: number): Promise<any> {
    throw new Error('Method not implemented.');
  }

}