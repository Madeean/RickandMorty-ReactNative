import {UserDomainRepository} from '../repositories/UserDomainRepository.ts';
import {User} from '../model/User.ts';
import {UserDomainUseCase} from '../usecase/UserDomainUseCase.ts';
import {UserDataRepositoryImpl} from '../../data/repositories/UserDataRepositoryImpl.ts';

export class UserDomainImpl implements UserDomainUseCase {
  private userRepositoryImpl: UserDataRepositoryImpl;

  constructor(userRepositoryImpl: UserDataRepositoryImpl) {
    this.userRepositoryImpl = userRepositoryImpl;
  }
  getUser(id: number): Promise<User> {
    return this.userRepositoryImpl.getUser(id);
  }
}
