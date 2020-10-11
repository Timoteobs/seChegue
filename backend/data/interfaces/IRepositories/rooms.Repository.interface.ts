import  Rooms  from '../../model/rooms.model';

export interface IRoomsRepository {
  getByName(name: string): Promise<Rooms[]>;
  getById(_id: number): Promise<Rooms>;
  toList(): Promise<Rooms[]>;
  save(rooms: Rooms): Promise<any>;
  update(rooms: Rooms): Promise<any>;
  delete(_id: number): Promise<any>;
}