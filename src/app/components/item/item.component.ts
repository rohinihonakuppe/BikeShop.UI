import { Component, EventEmitter, inject , Input, Output } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() bike: any;
 @Output() addToFavourites = new EventEmitter<any>();
    private router = inject(Router);


addBikeToFavourites(bike: any) {
  this.addToFavourites.emit(bike);
}
  viewDetails(bike:any){
     this.router.navigate(['/bike', bike.id]);
  }
}
