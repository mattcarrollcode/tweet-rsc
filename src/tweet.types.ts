export type TweetResult = {
  self_thread?: SelfThread;
  entities?: Entities;
  card?: Card;
  __typename?: string;
  lang?: string;
  favorite_count?: number;
  possibly_sensitive?: boolean;
  created_at: Date;
  display_text_range?: number[];
  id_str?: string;
  text: string;
  user: User;
  edit_control?: EditControl;
  mediaDetails?: MediaDetail[];
  photos?: Photo[];
  retweet_count?: number;
  conversation_count?: number;
  reply_count?: number;
  news_action_type?: string;
  quoted_tweet?: QuotedTweet;
  isEdited?: boolean;
  isStaleEdit?: boolean;
};

export type Card = {
  card_platform?: CardPlatform;
  name?: string;
  url?: string;
  binding_values?: BindingValues;
};

export type BindingValues = {
  photo_image_full_size_large?: PhotoImageFullSize;
  thumbnail_image?: PhotoImageFullSize;
  description?: Description;
  domain?: Description;
  thumbnail_image_large?: PhotoImageFullSize;
  summary_photo_image_small?: PhotoImageFullSize;
  thumbnail_image_original?: PhotoImageFullSize;
  site?: Site;
  photo_image_full_size_small?: PhotoImageFullSize;
  summary_photo_image_large?: PhotoImageFullSize;
  thumbnail_image_small?: PhotoImageFullSize;
  creator?: Creator;
  thumbnail_image_x_large?: PhotoImageFullSize;
  photo_image_full_size_original?: PhotoImageFullSize;
  vanity_url?: URL;
  photo_image_full_size?: PhotoImageFullSize;
  thumbnail_image_color?: EColor;
  title?: Description;
  summary_photo_image_color?: EColor;
  summary_photo_image_x_large?: PhotoImageFullSize;
  summary_photo_image?: PhotoImageFullSize;
  photo_image_full_size_color?: EColor;
  photo_image_full_size_x_large?: PhotoImageFullSize;
  card_url?: URL;
  summary_photo_image_original?: PhotoImageFullSize;
};

export type Creator = {
  type?: string;
  user_value?: UserValue;
};

export type Site = {
  scribe_key?: string;
  type?: string;
  user_value?: UserValue;
};

export type UserValue = {
  id_str?: string;
  path?: any[];
};

export type Description = {
  string_value?: string;
  type?: string;
};

export type ImageColorValue = {
  palette?: Palette[];
};

export type Palette = {
  rgb?: RGB;
  percentage?: number;
};

export type RGB = {
  blue?: number;
  green?: number;
  red?: number;
};

export type EColor = {
  image_color_value?: ImageColorValue;
  type?: string;
};

export type PhotoImageFullSize = {
  image_value?: ImageValue;
  type?: Type;
};

export enum Type {
  Image = "IMAGE",
}

export type ImageValue = {
  height?: number;
  width?: number;
  url?: string;
};

export type Platform = {
  audience?: Audience;
  device?: Device;
};

export type Audience = {
  name?: string;
};

export type Device = {
  name?: string;
  version?: string;
};

export type CardPlatform = {
  platform?: Platform;
};

export type SelfThread = {
  id_str?: string;
};

export type QuotedTweet = {
  lang?: string;
  reply_count?: number;
  retweet_count?: number;
  favorite_count?: number;
  possibly_sensitive?: boolean;
  created_at?: Date;
  display_text_range?: number[];
  entities?: Entities;
  id_str?: string;
  text?: string;
  user?: User;
  edit_control?: EditControl;
  mediaDetails?: MediaDetail[];
  photos?: Photo[];
  isEdited?: boolean;
  isStaleEdit?: boolean;
};

export type EditControl = {
  edit_tweet_ids?: string[];
  editable_until_msecs?: string;
  is_edit_eligible?: boolean;
  edits_remaining?: string;
};

export type Entities = {
  hashtags?: Hashtag[];
  urls?: Media[];
  user_mentions?: UserMention[];
  symbols?: any[];
  media?: Media[];
};

export type Hashtag = {
  indices: number[];
  text: string;
};

export type UserMention = {
  id_str: string;
  indices: number[];
  name: string;
  screen_name: string;
};

export type Media = {
  display_url: string;
  expanded_url: string;
  indices: number[];
  url: string;
};

export type MediaDetail = {
  display_url?: string;
  expanded_url?: string;
  ext_media_availability?: EXTMediaAvailability;
  indices?: number[];
  media_url_https?: string;
  original_info?: OriginalInfo;
  sizes?: Sizes;
  type?: string;
  url?: string;
};

export type EXTMediaAvailability = {
  status?: string;
};

export type OriginalInfo = {
  height?: number;
  width?: number;
  focus_rects?: CropCandidate[];
};

export type CropCandidate = {
  x?: number;
  y?: number;
  w?: number;
  h?: number;
};

export type Sizes = {
  large?: Large;
  medium?: Large;
  small?: Large;
  thumb?: Large;
};

export type Large = {
  h?: number;
  resize?: string;
  w?: number;
};

export type Photo = {
  backgroundColor?: BackgroundColor;
  cropCandidates?: CropCandidate[];
  expandedUrl?: string;
  url?: string;
  width?: number;
  height?: number;
};

export type BackgroundColor = {
  red?: number;
  green?: number;
  blue?: number;
};

export type User = {
  id_str?: string;
  name?: string;
  profile_image_url_https?: string;
  screen_name?: string;
  verified?: boolean;
  is_blue_verified?: boolean;
};
