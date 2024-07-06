import {EpisodeDetailModelDomain} from './model/EpisodeModelDomain.ts';

export interface EpisodeDomainRepository {
  getEpisodeTest(): Promise<EpisodeDetailModelDomain[]>;
}
