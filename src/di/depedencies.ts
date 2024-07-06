import {UserDomainRepository} from './../domain/repositories/UserDomainRepository.ts';
import {UserDataRepositoryImpl} from './../data/repositories/UserDataRepositoryImpl';
import {UserDomainUseCase} from './../domain/usecase/UserDomainUseCase';
import {UserDomainImpl} from './../domain/domainimpl/UserDomainImpl';

// Konfigurasi dependensi
const userRepository: UserDomainRepository = new UserDataRepositoryImpl();
const userDomainUseCase: UserDomainUseCase = new UserDomainImpl(userRepository);

export {userDomainUseCase};
