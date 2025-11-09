import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from '../../services/artists.service';
import { Artist, Show } from '../../models/artist.model';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent implements OnInit {
  artist: Artist | undefined;
  upcomingShows: Show[] = [];

  constructor(
    private route: ActivatedRoute,
    private artistsService: ArtistsService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    console.log('Artist ID from route:', idParam);
    const id = Number(idParam);
    console.log('Parsed artist ID:', id);
    this.loadArtistData(id);
  }

  private loadArtistData(id: number): void {
    console.log('Loading artist with ID:', id);
    this.artistsService.getArtistById(id).subscribe({
      next: (artist) => {
        console.log('Artist data received:', artist);
        if (artist) {
          this.artist = artist;
          this.upcomingShows = artist.upcomingShows;
          console.log('Artist loaded:', this.artist);
        } else {
          console.log('No artist found with ID:', id);
        }
      },
      error: (error) => {
        console.error('Error loading artist data:', error);
      }
    });
  }
}