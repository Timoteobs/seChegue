import  ConnectionList  from '../../model/connectionList.model';

export interface IConnectionListRepository {
  getByName(name: string): Promise<ConnectionList[]>;
  getById(_id: number): Promise<ConnectionList>;
  toList(): Promise<ConnectionList[]>;
  save(connectionList: ConnectionList): Promise<any>;
  update(connectionList: ConnectionList): Promise<any>;
  delete(_id: number): Promise<any>;
}