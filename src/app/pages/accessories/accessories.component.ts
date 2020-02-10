import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent {
  selectedAccessoryColorAndModel
  selectedColorAndModel
  accessories
  constructor(private router: Router) {
    this.selectedColorAndModel = history.state
    this.selectedAccessoryColorAndModel = this.selectedColorAndModel
    this.accessories = [
      { accessoryName: 'Panoramik Cam Tavan', accessoryCost: 9500, isSelected: false },
      { accessoryName: 'Aktif Park Asistanı', accessoryCost: 14999, isSelected: false },
      { accessoryName: 'Akıllı Bagaj Kapağı', accessoryCost: 4999, isSelected: false },
      { accessoryName: 'X&Y Müzik Sistemi', accessoryCost: 2000, isSelected: false },
      { accessoryName: 'Ford Co-Pilot 360', accessoryCost: 14999, isSelected: false },
      { accessoryName: 'Kış Paketi', accessoryCost: 2400, isSelected: false },
      { accessoryName: 'Stil Paketi', accessoryCost: 12000, isSelected: false },
      { accessoryName: 'Konfort Paket', accessoryCost: 18000, isSelected: false },
    ]
    this.selectedAccessoryColorAndModel.accessories = []
    this.selectedAccessoryColorAndModel.accTotalCost = 0
  }
  accessorySelect(accessory) {
    accessory.isSelected = !accessory.isSelected

  }
  finishSelection() {
    for (let index = 0; index < this.accessories.length; index++) {
      if (this.accessories[index].isSelected) {
        this.selectedAccessoryColorAndModel.accessories.push(this.accessories[index])
        this.selectedAccessoryColorAndModel.accTotalCost += this.accessories[index].accessoryCost;
      }
    }
  
    this.router.navigateByUrl('/summary', { state: this.selectedAccessoryColorAndModel })
  }
}
