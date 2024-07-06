interface EpisodeDetailModelDataResponse {
  id?: number;
  name?: string;
  air_date?: string; // Note: This naming convention is changed to match JavaScript style (camelCase)
  episode?: string;
  created?: string;
  characters?: string[] | null;
}

interface EpisodeModelDataResponse {
  results: EpisodeDetailModelDataResponse[] | null;
}

interface EpisodeDetailModelDomain {
  id: number;
  name: string;
  airDate: string;
  episode: string;
  created: string;
  characterList: string[];
}

namespace EpisodeTransformUtils {
  export function transformEpisodeDetail(
    response: EpisodeDetailModelDataResponse | null,
  ): EpisodeDetailModelDomain {
    return {
      id: response?.id ?? 0,
      name: response?.name ?? '',
      airDate: response?.air_date ?? '', // Adjusted for camelCase naming convention in JavaScript
      episode: response?.episode ?? '',
      created: response?.created ?? '',
      characterList: response?.characters ?? [],
    };
  }

  export function transformEpisodeDetailList(
    responses: EpisodeDetailModelDataResponse[] | null,
  ): EpisodeDetailModelDomain[] {
    if (!responses) {
      return [];
    }
    return responses.map(response => transformEpisodeDetail(response));
  }
}

interface EpisodeErrorModelDataResponse {
  error: string | null;
}

namespace EpisodeErrorTransformUtils {
  export function transformErrorModel(
    response: EpisodeErrorModelDataResponse | null,
  ): EpisodeDetailModelDomain[] {
    return [];
  }
}

export type {
  EpisodeDetailModelDataResponse,
  EpisodeModelDataResponse,
  EpisodeDetailModelDomain,
  EpisodeErrorModelDataResponse,
};

export {EpisodeTransformUtils, EpisodeErrorTransformUtils};
