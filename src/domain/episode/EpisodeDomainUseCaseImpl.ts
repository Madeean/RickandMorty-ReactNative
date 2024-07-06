import {EpisodeDataRepositoryImpl} from '../../data/repositories/repositoryImpl/EpisodeDataRepositoryImpl.ts';
import {EpisodeDomainUseCase} from './EpisodeDomainUseCase.ts';
import {EpisodeDetailModelDomain} from './model/EpisodeModelDomain.ts';

export class EpisodeDomainUseCaseImpl implements EpisodeDomainUseCase {
  private repository: EpisodeDataRepositoryImpl;

  constructor(repository: EpisodeDataRepositoryImpl) {
    this.repository = repository;
  }

  getEpisodeTest(): Promise<EpisodeDetailModelDomain[]> {
    return this.repository.getEpisodeTest();
  }
  // getUser(id: number): Promise<User> {
  //   return this.userRepositoryImpl.getUser(id);
  // }
}
