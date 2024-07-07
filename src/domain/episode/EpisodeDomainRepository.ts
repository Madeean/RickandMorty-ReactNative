import {EpisodeDetailModelDomain} from './model/EpisodeModelDomain.ts';

export interface EpisodeDomainRepository {
  getEpisode(
    page: number,
    episode: string,
  ): Promise<EpisodeDetailModelDomain[]>;
}
