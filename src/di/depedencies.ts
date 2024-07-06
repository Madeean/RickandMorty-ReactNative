import {EpisodeDomainRepository} from '../domain/episode/EpisodeDomainRepository.ts';
import {EpisodeDataRepositoryImpl} from '../data/repositories/repositoryImpl/EpisodeDataRepositoryImpl.ts';
import {EpisodeDomainUseCase} from '../domain/episode/EpisodeDomainUseCase.ts';
import {EpisodeDomainUseCaseImpl} from '../domain/episode/EpisodeDomainUseCaseImpl.ts';

const episodeRepository: EpisodeDomainRepository =
  new EpisodeDataRepositoryImpl();
const episodeDomainUseCase: EpisodeDomainUseCase = new EpisodeDomainUseCaseImpl(
  episodeRepository,
);

export {episodeDomainUseCase};
