import { Container } from 'inversify';

// Types
import TYPES from '../../data/types';

// Repositories
import { UserRepository } from '../../data/repositories/user.repository';
import { RoomsRepository } from '../../data/repositories/rooms.repository';
import { ConnectionListRepository } from '../../data/repositories/connectionList.repository';
import { LifeProjectRepository } from '../../data/repositories/lifeProject.repository';


// Repositories interfaces
import { IUserRepository } from '../../data/interfaces/IRepositories/userRepository.interface';
import { IRoomsRepository } from '../../data/interfaces/IRepositories/rooms.Repository.interface';
import {ILifeProjectRepository} from '../../data/interfaces/IRepositories/lifeProject.Repository.interface';
import { IConnectionListRepository } from '../../data/interfaces/IRepositories/connectionList.Repository.interface';


// Services
import { UserService } from '../../data/services/userService';
import { RoomsService } from '../../data/services/roomsService';
import { LifeProjectService } from '../../data/services/lifeProjectService';
import { ConnectionListService } from '../../data/services/connectionListService';


// Services interfaces
import { IUserService } from '../../data/interfaces/IServices/userServices.interface';
import { IConnectionListService } from '../../data/interfaces/IServices/connectionListServices.interface';
import { ILifeProjectService } from '../../data/interfaces/IServices/lifeProjectServices.interface';
import { IRoomsService } from '../../data/interfaces/IServices/roomsServices.interface';


// Binds
const container = new Container();

// Services Binds
container.bind<IUserService>(TYPES.IUserService).to(UserService);
container.bind<IRoomsService>(TYPES.IRoomsService).to(RoomsService);
container.bind<ILifeProjectService>(TYPES.ILifeProjectService).to(LifeProjectService);
container.bind<IConnectionListService>(TYPES.ILifeProjectService).to(ConnectionListService);


// Repositories Binds
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
container.bind<IRoomsRepository>(TYPES.IRoomsRepository).to(RoomsRepository);
container.bind<ILifeProjectRepository>(TYPES.ILifeProjectRepository).to(LifeProjectRepository);
container.bind<IConnectionListRepository>(TYPES.IConnectionListRepository).to(ConnectionListRepository);


export default container;