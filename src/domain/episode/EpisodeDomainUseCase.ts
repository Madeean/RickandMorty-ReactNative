import {EpisodeDetailModelDomain} from './model/EpisodeModelDomain.ts';

export interface EpisodeDomainUseCase {
  getEpisode(
    page: number,
    episode: string,
  ): Promise<EpisodeDetailModelDomain[]>;
}
