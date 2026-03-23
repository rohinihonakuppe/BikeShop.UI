import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BikeServiceService } from '../bike-service.service';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrl: './bike-details.component.scss'
})

export class BikeDetailsComponent implements OnInit{

 private route = inject(ActivatedRoute);

 private bikeId = 0;
  bikes: any;
  private router = inject(Router);
  
constructor(private bikeService: BikeServiceService){
  this.route.params.subscribe((t) => {
    this.bikeId = t['id'] 
    console.log(this.bikeId);
  })
} 
 ngOnInit(): void {
    this.getBikesbyId();
    
   }

  getBikesbyId() {
    this.bikeService.getBikeById(this.bikeId).subscribe({
      next: (response) => {
       
        console.log(response);
         this.bikes = response.Data;
      },
      error: (error) => console.log('Error: ', error)
    });
  }

  goBack(){
     this.router.navigate(['/home']);
  }
}
