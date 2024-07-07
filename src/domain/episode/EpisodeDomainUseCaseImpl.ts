import {EpisodeDataRepositoryImpl} from '../../data/repositories/repositoryImpl/EpisodeDataRepositoryImpl.ts';
import {EpisodeDomainUseCase} from './EpisodeDomainUseCase.ts';
import {EpisodeDetailModelDomain} from './model/EpisodeModelDomain.ts';

export class EpisodeDomainUseCaseImpl implements EpisodeDomainUseCase {
  private repository: EpisodeDataRepositoryImpl;

  constructor(repository: EpisodeDataRepositoryImpl) {
    this.repository = repository;
  }

  getEpisode(
    page: number,
    episode: string,
  ): Promise<EpisodeDetailModelDomain[]> {
    return this.repository.getEpisode(page, episode);
  }
  // getUser(id: number): Promise<User> {
  //   return this.userRepositoryImpl.getUser(id);
  // }
}
