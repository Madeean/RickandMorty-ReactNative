import {EpisodeDomainRepository} from '../../../domain/episode/EpisodeDomainRepository.ts';
import {EpisodeDetailModelDomain} from '../../../domain/episode/model/EpisodeModelDomain.ts';
import {
  EpisodeModelDataResponse,
  EpisodeTransformUtils,
} from '../network/episode/model/EpisodeModelDataResponse.ts';

export class EpisodeDataRepositoryImpl implements EpisodeDomainRepository {
  async getEpisodeTest(): Promise<EpisodeDetailModelDomain[]> {
    const response = await fetch('https://rickandmortyapi.com/api/episode');
    const dataResponseRaw: EpisodeModelDataResponse = await response.json();
    const dataResponse = EpisodeTransformUtils.transformEpisodeDetailList(
      dataResponseRaw.results,
    );
    return dataResponse;
  }

  // async getUser(id: number): Promise<User> {
  //   // Implementasi fetching data dari API atau sumber data lainnya
  //   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  //   const user = await response.json();
  //   return {
  //     id: user.id,
  //     name: user.name,
  //     email: user.email,
  //   };
  // }
}
