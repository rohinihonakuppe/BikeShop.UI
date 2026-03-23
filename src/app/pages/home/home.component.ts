import { Component, inject, OnInit } from '@angular/core';
import { BikeServiceService } from '../bike-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private router = inject(Router);
  bikes: any[] = [];
  favourites: string[] = [];
      bike: any = {
      productId: null
  };
  isFavourite!: boolean;

  constructor(private bikeService: BikeServiceService) { }

   ngOnInit(): void {
    this.getAllBikes();
   }

  getAllBikes() {
    this.bikeService.getBikes().subscribe({
      next: (response) => {
       
        console.log(response);
         this.bikes = response.Data;
      },
      error: (error) => console.log('Error: ', error)
    });
  }

  
addBikeToFavourites(bike: any) {
  if (bike.isFavourite) {
    this.goToFavourites();
    return;
  }

  const payload = {
    productId: bike.productId
  };

  this.bikeService.addToFavourites(bike).subscribe(res => {
    if (res.IsSuccess) {
      bike.isFavourite = true;
    }
  });
}

  markBikeAsFavourite(bikes: any[], bikeId: number) {
  bikes.forEach(bike => {
    if (bike.productId === bikeId) {
      bike.isFavourite = true;
    }
  });
}

goToFavourites() {
  this.router.navigate(['/my-favourites']);
}
}
