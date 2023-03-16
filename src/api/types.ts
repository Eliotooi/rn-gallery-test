// https://quicktype.io/ is used to generate types

export type PhotoRaw = {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls;
  links: PhotoLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: TopicSubmissions;
  user: User;
};

export type PhotoLinks = {
  self: string;
  html: string;
  download: string;
  download_location: string;
};

export type TopicSubmissions = {};

export type Urls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
};

export type User = {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: null;
  portfolio_url: null;
  bio: string;
  location: string;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
};

export type UserLinks = {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
};

export type ProfileImage = {
  small: string;
  medium: string;
  large: string;
};

export type Social = {
  instagram_username: string;
  portfolio_url: null;
  twitter_username: null;
  paypal_email: null;
};

export type FetchPhotosRawResponse = PhotoRaw[];

export type Photo = {
  id: string;
  description: string;
  author: string;
  thumbnailURI: string;
  fullImageURI: string;
};
