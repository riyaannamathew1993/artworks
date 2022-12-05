import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  artWorkContentUrl = 'https://api.artic.edu/api/v1/artworks';
  $artWorkContent = new BehaviorSubject([]);

  constructor(private http: HttpClient) { 
    this.getArtWorkContent();
  }

  fetchContent(url) {
    return this.http.get<any>(url);
  }

  getArtWorkContent() {
    this.fetchContent(this.artWorkContentUrl).subscribe({
      next: artworkData => {
        console.log('DATA',artworkData.data)
        this.$artWorkContent.next(artworkData.data);
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })

  }
}


