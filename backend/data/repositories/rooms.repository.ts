import { Op } from 'sequelize';
import { IRoomsRepository } from '../interfaces/IRepositories/rooms.Repository.interface';
import Rooms from '../model/rooms.model';


export class RoomsRepository implements IRoomsRepository {
  
  getByName(name: string): Promise<Rooms[]> {
    return new Promise((resolve, reject) => {
      Rooms.findAll({
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
 
  getByEmail(_email: string): Promise<Rooms> {
    return new Promise((resolve, reject) => {
      Rooms.findOne({
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

  getById(_id: number): Promise<Rooms> {
    throw new Error('Method not implemented.');
  }
  toList(): Promise<Rooms[]> {
    throw new Error('Method not implemented.');
  }

  save(rooms: Rooms): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const _transaction = await Rooms.sequelize.transaction();
      Rooms.create(Rooms, { transaction: _transaction })
        .then(async result => {
          await _transaction.commit();
          resolve(result);
        }).catch(async error => {
          await _transaction.rollback();
          reject(error);
        });
    });
  }

  update(rooms: Rooms): Promise<any> {
    throw new Error('Method not implemented.');
  }
  delete(_id: number): Promise<any> {
    throw new Error('Method not implemented.');
  }

}