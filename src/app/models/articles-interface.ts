/* eslint-disable @typescript-eslint/naming-convention */
export interface ArticlesApi {
  posts: Post[];
  totalResults: number;
  moreResultsAvailable: number;
  next: string;
  requestsLeft: number;
  warnings?: any;
}

export interface Post {
  thread: Thread;
  uuid: string;
  url: string;
  ord_in_thread: number;
  parent_url?: any;
  author?: string;
  published: string;
  title: string;
  text: string;
  highlightText: string;
  highlightTitle: string;
  highlightThreadTitle: string;
  language: string;
  external_links: string[];
  external_images: any[];
  entities: Entities;
  rating?: any;
  crawled: string;
  updated: string;
}

export interface Entities {
  persons: any[];
  organizations: any[];
  locations: any[];
}

export interface Thread {
  uuid: string;
  url: string;
  site_full: string;
  site: string;
  site_section: string;
  site_categories: string[];
  section_title: string;
  title: string;
  title_full: string;
  published: string;
  replies_count: number;
  participants_count: number;
  site_type: string;
  country: string;
  spam_score: number;
  main_image: string;
  performance_score: number;
  domain_rank?: number;
  reach?: Reach;
  social: Social;
}

export interface Social {
  facebook: Facebook;
  gplus: Shares;
  pinterest: Shares;
  linkedin: Shares;
  stumbledupon: Shares;
  vk: Shares;
}

export interface Shares {
  shares: number;
}

export interface Facebook {
  likes: number;
  comments: number;
  shares: number;
}

export interface Reach {
  per_million: number;
  page_views: Pageviews;
  updated: string;
}

export interface Pageviews {
  per_million: number;
  per_user: number;
}
