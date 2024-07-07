import {EpisodeDomainRepository} from '../../../domain/episode/EpisodeDomainRepository.ts';
import {EpisodeDetailModelDomain} from '../../../domain/episode/model/EpisodeModelDomain.ts';
import {
  EpisodeModelDataResponse,
  EpisodeTransformUtils,
} from '../network/episode/model/EpisodeModelDataResponse.ts';
import axios from 'axios';

export class EpisodeDataRepositoryImpl implements EpisodeDomainRepository {
  async getEpisode(
    page: number,
    episode: string,
  ): Promise<EpisodeDetailModelDomain[]> {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/episode?page=${page}&name=${episode}`,
      );
      const dataResponseRaw: EpisodeModelDataResponse = response.data;
      return EpisodeTransformUtils.transformEpisodeDetailList(
        dataResponseRaw.results,
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          error.response &&
          error.response.data.error === 'There is nothing here'
        ) {
          return [];
        }
      }
      console.error('Error fetching episodes:', error);
      throw error;
    }
  }
}
