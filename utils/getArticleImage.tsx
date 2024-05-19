import { MultiMedia } from '@/types/Article';

export const getArticleImage = (multimedia?: MultiMedia[]) =>
  multimedia && multimedia.length > 0 ? multimedia[0].url?.replace(/\"/g, '') : null;
