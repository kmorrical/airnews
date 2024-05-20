import { MultiMedia } from '@/types/Article';

// put this component in a util since it is used in two places
export const getArticleImage = (multimedia?: MultiMedia[]) =>
  multimedia && multimedia.length > 0 ? multimedia[0].url?.replace(/\"/g, '') : null;
