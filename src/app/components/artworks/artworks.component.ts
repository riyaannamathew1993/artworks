import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent implements OnInit {
  artworks;
  artworkData;
  artistTitle;
  isLoading = false;
  numberOfArtworksFeatured = 0;
  numberOfPages = 0;
  numberOfArtworksPerPage = 6;
  firstIndex = 0;
  lastIndex = this.numberOfArtworksPerPage;
  searchedArtWorks;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
      this.contentService.$artWorkContent.subscribe(
        (artworkData) => {
          this.isLoading = true;
          this.artworks = artworkData;
          this.searchedArtWorks = artworkData;
          this.numberOfArtworksFeatured = this.artworks.length;
          if(this.artworks.length > 0){
            this.isLoading = false;
          }
        }
      )
  }

  updateGrid(pageEvent) {
    this.firstIndex = pageEvent.pageIndex * pageEvent.pageSize;
    this.lastIndex = this.firstIndex + pageEvent.pageSize;
  }

  
  sortToggleEventHandler(event) {
    const sortOption = event.value;
    this.sortArtWorks(sortOption);
  }

  sortArtWorks(option) {
    switch(option) {
      case 'artworks': {
        this.searchedArtWorks = this.searchedArtWorks.sort((a, b) => {
          const artworkA = a.title;
          const artworkB = b.title;
          return this.compare(artworkA, artworkB);
        });
      }
      break;
      case 'artists' : {
        this.searchedArtWorks = this.searchedArtWorks.sort((a, b) => {
          const artworkA = a.artist_title;
          const artworkB = b.artist_title;
          return this.compare(artworkA, artworkB);
        });
      }
      break;
      case 'year' : {
        this.searchedArtWorks = this.searchedArtWorks.sort((a, b) => {
          const artworkA = a.date_start;
          const artworkB = b.date_start;
          return this.compare(artworkA, artworkB);
        });
      }
      break;
    }
  }

  compare(itemA, itemB) {
    let comparison = 0;
    if (itemA > itemB) {
      comparison = 1;
    } else if (itemA < itemB) {
      comparison = -1;
    }
    return comparison;
  }
}


