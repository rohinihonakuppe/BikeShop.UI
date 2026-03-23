import { BikeService } from '../../bike.service';
import { Component, inject, OnInit } from '@angular/core';
import { BikeServiceService } from '../bike-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-favourites',
  templateUrl: './my-favourites.component.html',
  styleUrls: ['./my-favourites.component.scss']
})
export class MyFavouritesComponent implements OnInit {
  private router = inject(Router);
  private bikeId: number = 1;
  bikes: any[] = [];
  favouriteBikes: any[] = [];
  


  constructor(private bikeService: BikeServiceService) { }

  ngOnInit(): void {
  this.loadFavourites();
}

loadFavourites() {
  this.bikeService.getFavourites().subscribe(response => {
    if (response?.Data) {
      this.favouriteBikes = response.Data;
    }
  });
}

  removeFromFavourites(bikeId: number) {
      const confirmDelete = confirm('Are you sure you want to remove this bike from favourites?');

  if (!confirmDelete) return;
     this.bikeService.removeFromFavourites(bikeId).subscribe(response => {
    if (response.IsSuccess) {
      this.favouriteBikes = this.favouriteBikes.filter(b => b.id !== bikeId);
      this.loadFavourites();
    }
  });
}

  goBack(){
     this.router.navigate(['/home']);
  }
 
}
