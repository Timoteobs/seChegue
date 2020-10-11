const TYPES = {
  // Services Types
  IUserService: Symbol('IUserService'),
  ILifeProjectService: Symbol('ILifeProjectService'),
  IRoomsService: Symbol('IRoomsService'),
  IConnectionListService: Symbol('IConnectionListService'),

  // Repositories Types
  IUserRepository: Symbol('IUserRepository'),
  ILifeProjectRepository: Symbol('ILifeProjectRepository'),
  IRoomsRepository: Symbol('IRoomsRepository'),
  IConnectionListRepository: Symbol('IConnectionListRepository'),
};

export default TYPES;