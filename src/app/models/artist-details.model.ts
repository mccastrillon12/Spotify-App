import { ReleasesInformation } from "./releases-information"

export interface ArtistTracks{
tracks:TrackInformation[]
}

export interface TrackInformation{
  name:string,
  track_number:number,
  type:string
  album:ReleasesInformation
}
