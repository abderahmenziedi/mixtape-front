import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ArtistsService } from '../../services/artists.service';
import { Artist } from '../../models/artist.model';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.css'
})
export class ArtistsComponent implements OnInit {
  artists: Artist[] = [];

  constructor(
    private artistsService: ArtistsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadArtists();
  }

  private loadArtists(): void {
    this.artistsService.getArtists().subscribe({
      next: (artists: Artist[]) => {
        this.artists = artists;
      },
      error: (error: any) => {
        console.error('Error loading artists:', error);
      }
    });
  }

  viewArtist(artistId: number): void {
    this.router.navigate(['/artist', artistId]);
  }
}