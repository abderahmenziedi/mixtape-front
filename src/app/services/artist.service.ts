import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Artist, Show } from '../models/artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() { }

  getArtist(): Observable<Artist> {
    const artist: Artist = {
      id: 1,
        name: 'SAMARA',
        bio: 'In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum. Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet.',
        imageUrl: 'assets/images/samara1.png',
        signatureUrl: 'assets/images/sig_1.png',
        genre: 'RAP/TRAP',
        albumsCount: 5,
        concertsCount: 200,
        upcomingShows: this.getUpcomingShows()
      };
    
    return of(artist);
  }

  private getUpcomingShows(): Show[] {
    return [
      {
        id: 1,
        date: '18/07',
        name: 'Electric Castle Festival',
        location: 'Cluj, Romania',
        ticketUrl: '#'
      },
      {
        id: 2,
        date: '20/07',
        name: 'Ultra Music Festival',
        location: 'Miami, USA',
        ticketUrl: '#'
      },
      {
        id: 3,
        date: '03/08',
        name: 'Untold Festival',
        location: 'Cluj, Romania',
        ticketUrl: '#'
      },
      {
        id: 4,
        date: '11/08',
        name: 'Sun Kissed Festival',
        location: 'Paris, France',
        ticketUrl: '#'
      }
    ];
  }

  // Method to get upcoming shows separately (for future use)
  getUpcomingShowsObservable(): Observable<Show[]> {
    return of(this.getUpcomingShows());
  }

  // Method to get a specific show by ID (for future use)
  getShowById(id: number): Observable<Show | undefined> {
    const shows = this.getUpcomingShows();
    const show = shows.find(s => s.id === id);
    return of(show);
  }
}