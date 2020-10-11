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
 
  getById(_id: number): Promise<ConnectionList> {
    throw new Error('Method not implemented.');
  }
  toList(): Promise<ConnectionList[]> {
    throw new Error('Method not implemented.');
  }

  save(connectionList: ConnectionList): Promise<any> {
    return new Promise(async (resolve, reject) => {
      ConnectionList.create(connectionList,)
        .then(async result => {
          resolve(result);
        }).catch(async error => {
          reject(error);
        });
    });
  }

  update(connectionList: ConnectionList): Promise<any> {
    return new Promise(async (resolve, reject) => {
      ConnectionList.update(connectionList.ToModify(),
        {
          where:
          {
            id: connectionList.id
          },
        })
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  delete(_id: number): Promise<any> {
    throw new Error('Method not implemented.');
  }

}