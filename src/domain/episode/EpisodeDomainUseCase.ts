import {EpisodeDetailModelDomain} from './model/EpisodeModelDomain.ts';

export interface EpisodeDomainUseCase {
  getEpisodeTest(): Promise<EpisodeDetailModelDomain[]>;
}
