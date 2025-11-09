import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Artist } from '../models/artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor() { }

  getArtists(): Observable<Artist[]> {
    const artists: Artist[] = [
      {
        id: 1,
        name: 'SAMARA',
        bio: 'In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum. Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet.',
        imageUrl: '/assets/images/samara1.jpg',
        signatureUrl: '/assets/images/sig.png',
        genre: 'RAP/TRAP',
        albumsCount: 5,
        concertsCount: 200,
        upcomingShows: [
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
          }
        ]
      },
      {
        id: 2,
        name: 'Jane Smith',
        bio: 'Praesent bibendum justo eget enim placerat, vel tincidunt quam consequat. Nullam viverra magna vitae diam dignissim, ac tempor elit lacinia. Sed mollis, dolor a aliquam faucibus, turpis lectus vehicula lorem, ut tristique mauris ante in lacus.',
        imageUrl: '/assets/images/artist_2.jpg',
        signatureUrl: '/assets/images/sig.png',
        genre: 'Jazz/Blues',
        albumsCount: 3,
        concertsCount: 32,
        upcomingShows: [
          {
            id: 3,
            date: '03/08',
            name: 'Jazz Night Festival',
            location: 'New York, USA',
            ticketUrl: '#'
          }
        ]
      },
      {
        id: 3,
        name: 'Mike Johnson',
        bio: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin venenatis maximus massa, quis imperdiet ex. Duis eget magna at arcu tincidunt ultricies. Curabitur vitae mi condimentum, eleifend nulla ac, pharetra risus.',
        imageUrl: '/assets/images/artist.png',
        signatureUrl: '/assets/images/sig.png',
        genre: 'Electronic',
        albumsCount: 7,
        concertsCount: 68,
        upcomingShows: [
          {
            id: 4,
            date: '11/08',
            name: 'Electronic Dance Festival',
            location: 'Berlin, Germany',
            ticketUrl: '#'
          }
        ]
      }
    ];
    
    return of(artists);
  }

  getArtistById(id: number): Observable<Artist | undefined> {
    return this.getArtists().pipe(
      map(artists => artists.find(artist => artist.id === id))
    );
  }
}