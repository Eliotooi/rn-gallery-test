export interface ImagesInDTO {
  id: string;
  alt_description: string;
  urls: Url;
  user: User;
}

interface Url {
  full: string;
}

interface User {
  username: string;
}
