export interface ArtistInformation {
  id:string;
  name: string;
  followers:{total:number};
  genres:string[];
  popularity:number;
  images:ArtistiImages[]
}

export interface ArtistResponse{
  artists: ArtistContent
}

export interface ArtistContent {
  href:string;
  items:ArtistInformation[];
  total:number
}

export interface ArtistiImages {
  height?: number;
  url: string;
  width?: number;
}



