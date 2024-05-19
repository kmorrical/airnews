export interface Article {
  abstract?: string;
  byline?: Byline;
  documentType?: string;
  headline: Headline;
  keywords?: Keyword[];
  multimedia: MultiMedia[];
  news_desk?: string;
  print_page?: string;
  print_section?: string;
  pub_date?: string;
  section_name?: string;
  snippet?: string;
  source?: string;
  subsection_name?: string;
  type_of_material?: string;
  uri?: string;
  web_url?: string;
  word_count?: number;
  _id?: string;
  lead_paragraph?: string;
}

interface Byline {
  organization?: string;
  original?: string;
  person?: Person;
}

interface Person {
  firstname?: string;
  lastname?: string;
  middlename?: string;
  organization?: string;
  qualifier?: string;
  rank?: number;
  role?: string;
  title?: string;
}

interface Headline {
  content_kicker?: any;
  kicker?: any;
  main?: string;
  name?: string;
  print_headline?: string;
  seo?: any;
  sub?: any;
}

interface Keyword {
  major?: string;
  name?: string;
  rank?: number;
  value?: string;
}

export interface MultiMedia {
  caption?: string;
  credit?: string;
  crop_name?: string;
  height?: number;
  legacy?: Legacy;
  rank?: number;
  subType?: string;
  subtype?: string;
  type?: string;
  url?: string;
  width?: number;
}

interface Legacy {
  xlarge?: string;
  xlargeheight?: number;
  xlargewidth?: number;
}
