import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikeServiceService } from '../bike-service.service';

@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.component.html',
  styleUrl: './add-bike.component.scss'
})
export class AddBikeComponent {
  private route = inject(ActivatedRoute);
  private bikeService = inject(BikeServiceService);
  categories: any[] = [];
  manufacturers: any[] = [];
  colors: any[] = [];
  currencies: any[] = [];
  selectedFile: File | null = null;

  bike: any = {
    model: '',
    manufacturerId: null,
    categoryId: null,
    colourId : null,
    weight: null,
    price: null,
    currencyId: null,
    imageData: null,
    modelDescription: null
  };


  constructor() {
    this.route.params.subscribe(params => {
      console.log(params);
    })
  }
  ngOnInit(): void {
    this.bikeService.getCategories().subscribe({
      next: (response) => {
        console.log(response);
        this.categories = response.Data;
      }
    });
    this.bikeService.getManufacturers().subscribe({
      next: (response) => {
        console.log(response);
        this.manufacturers = response.Data;
      }
    });
    this.bikeService.getcolor().subscribe({
      next: (response) => {
        console.log(response);
        this.colors = response.Data;
      }
    });
    this.bikeService.getCurrencies().subscribe({
      next: (response) => {
        console.log(response);
        this.currencies = response.Data;
      }
    });
  }

  onFileSelected(event: any) {
  const file = event.target.files[0];

  if (file) {
    this.selectedFile = file;
  }
}

saveBike(bikeForm: any) {
  if (bikeForm.valid) {

    const formData = new FormData();

    formData.append('model', this.bike.model);
    formData.append('manufacturerId', this.bike.manufacturerId);
    formData.append('categoryId', this.bike.categoryId);
    formData.append('colourId', this.bike.colourId);
    formData.append('weight', this.bike.weight);
    formData.append('price', this.bike.price);
    formData.append('currencyId', this.bike.currencyId);

    if (this.selectedFile) {
      formData.append('imageData', this.selectedFile);
    }

    formData.append('modelDescription', this.bike.modelDescription);

    this.bikeService.addBike(formData).subscribe({
      next: (response) => {
        console.log('Bike added successfully', response);
        bikeForm.reset();
        this.selectedFile = null;
      },
      error: (error) => {
        console.error('Error adding bike', error);
      }
    });

  } else {
    console.error('Form is invalid');
  }
}

 

}
