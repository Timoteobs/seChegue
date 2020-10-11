import  ConnectioList  from '../../model/connectionList.model';

export interface IConnectionListService {
  getByName(name: string): Promise<ConnectioList[]>;
  getById(_id: number): Promise<ConnectioList>;
  toList(): Promise<ConnectioList[]>;
  save(connectioList: ConnectioList): Promise<any>;
  update(connectioList: ConnectioList): Promise<any>;
  delete(_id: number): Promise<any>;
}