
export interface ReleaseResponse{
  albums:ReleaseAlbumInformation
}

export interface ReleaseAlbumInformation{
  items:ReleasesInformation[]
}
export interface ReleasesInformation {
  id:string;
  total_tracks?:number;
  release_date?:number;
  type?:string
  name: string;
  artists:ReleaseArtistInformation[]
  images:ReleasesImages[]
}

export interface ReleasesImages{
url:string;
height?: number;
width?: number
}

export interface ReleaseArtistInformation{
  id:string;
  name:string;
}
