interface EpisodeDetailModelDomain {
  id: number;
  name: string;
  airDate: string;
  episode: string;
  created: string;
  characterList: string[];
}

interface EpisodeModelDomain {
  results: EpisodeDetailModelDomain;
}

export type {EpisodeDetailModelDomain, EpisodeModelDomain};
