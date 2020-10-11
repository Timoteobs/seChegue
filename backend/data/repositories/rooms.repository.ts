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
 
  getById(_id: number): Promise<Rooms> {
    throw new Error('Method not implemented.');
  }
  toList(): Promise<Rooms[]> {
    throw new Error('Method not implemented.');
  }

  save(rooms: Rooms): Promise<any> {
    return new Promise(async (resolve, reject) => {
      Rooms.create(rooms)
        .then(async result => {
          resolve(result);
        }).catch(async error => {
          reject(error);
        });
    });
  }

  update(rooms: Rooms): Promise<any> {
    return new Promise(async (resolve, reject) => {
      Rooms.update(rooms.ToModify(),
        {
          where:
          {
            id: rooms.id
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