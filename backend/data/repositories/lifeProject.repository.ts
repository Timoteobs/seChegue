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
  getById(_id: number): Promise<LifeProject> {
    throw new Error('Method not implemented.');
  }
  toList(): Promise<LifeProject[]> {
    throw new Error('Method not implemented.');
  }

  save(lifeProject: LifeProject): Promise<any> {
    return new Promise(async (resolve, reject) => {
      LifeProject.create(lifeProject,)
        .then((result: LifeProject) => {
          resolve(result);
        }).catch(async error => {
          reject(error);
        });
    });
  }

  update(lifeProject: LifeProject): Promise<any> {
    return new Promise(async (resolve, reject) => {
      LifeProject.update(lifeProject.ToModify(),
        {
          where:
          {
            id: lifeProject.id
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