import { Op } from 'sequelize';
import { ILifeProjectRepository } from '../interfaces/IRepositories/lifeProject.Repository.interface';
import LifeProject from '../model/lifeProject.model';


export class LifeProjectRepository implements ILifeProjectRepository {
  
  getByName(name: string): Promise<LifeProject[]> {
    return new Promise((resolve, reject) => {
      LifeProject.findAll({
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
 
  getByEmail(_email: string): Promise<LifeProject> {
    return new Promise((resolve, reject) => {
      LifeProject.findOne({
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

  getById(_id: number): Promise<LifeProject> {
    throw new Error('Method not implemented.');
  }
  toList(): Promise<LifeProject[]> {
    throw new Error('Method not implemented.');
  }

  save(lifeProject: LifeProject): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const _transaction = await LifeProject.sequelize.transaction();
      LifeProject.create(LifeProject, { transaction: _transaction })
        .then(async result => {
          await _transaction.commit();
          resolve(result);
        }).catch(async error => {
          await _transaction.rollback();
          reject(error);
        });
    });
  }

  update(lifeProject: LifeProject): Promise<any> {
    throw new Error('Method not implemented.');
  }
  delete(_id: number): Promise<any> {
    throw new Error('Method not implemented.');
  }

}