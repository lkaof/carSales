import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent {
  selectedColorAndModel
  selectedModel
  colors
  constructor(private router: Router) {
    this.selectedModel = history.state
    this.selectedColorAndModel = this.selectedModel
    this.colors = [
      { colorName: 'Red', colorCost: 500 },
      { colorName: 'Green', colorCost: 1500 },
      { colorName: 'Blue', colorCost: 2500 }
    ]
  }
  colorSelect(color) {
    this.selectedColorAndModel.colorName = color.colorName
    this.selectedColorAndModel.colorCost = color.colorCost
    this.router.navigateByUrl('/accessories', { state: this.selectedColorAndModel })
    //just added console.log which will display the event details in browser on click of the button.
    //this.router.navigateByUrl('/accessories', { state: color })
  }
}
