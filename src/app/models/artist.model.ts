export interface Artist {
  upcomingShows: Show[];
  id: number;
  name: string;
  bio: string;
  imageUrl: string;
  signatureUrl: string;
  genre: string;
  albumsCount: number;
  concertsCount: number;
}

export interface Show {
  id: number;
  date: string;
  name: string;
  location: string;
  ticketUrl: string;
}

