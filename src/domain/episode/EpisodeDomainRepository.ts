import {EpisodeDetailModelDomain} from './model/EpisodeModelDomain.ts';

export interface EpisodeDomainRepository {
  getEpisode(page: number): Promise<EpisodeDetailModelDomain[]>;
}
