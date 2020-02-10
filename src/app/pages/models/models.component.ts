import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent {
  models
  constructor(private router: Router) {
    this.models = [
      { modelName: 'Focus', modelCost: 150000, modelImgSrc: 'https://www.ford.com.tr/getmedia/915cd95b-606e-4cc9-a84a-881aa9d83c16/FRD-258-Focus-ST-Line.png.aspx?width=768&height=432&ext=.png' },
      { modelName: 'Mondeo', modelCost: 180000, modelImgSrc: 'https://www.ford.com.tr/getmedia/33b488d8-e2d8-4342-8291-13e70ef07b6f/yeni-ford-mondeo.png.aspx?width=768&height=432&ext=.png' },
      { modelName: 'Fiesta', modelCost: 120000, modelImgSrc: 'https://www.ford.com.tr/getmedia/9ef8cb34-e914-4932-9d16-53b325ec5889/fiesta_1.png.aspx?width=768&height=432&ext=.png' },
      //
      { modelName: 'Galaxy', modelCost: 140000, modelImgSrc: 'https://www.ford.com.tr/getmedia/cd50cdca-5c8b-499c-98e6-e399fc388014/Galaxy.png.aspx?width=768&height=432&ext=.png' },
      { modelName: 'Ecosport', modelCost: 130000, modelImgSrc: 'https://www.ford.com.tr/getmedia/e7c8e04d-e5f3-4f5e-b2a8-58b352170117/ECOSPORT_1.png.aspx?width=768&height=432&ext=.png' },
      { modelName: 'S-Max', modelCost: 160000, modelImgSrc: 'https://www.ford.com.tr/getmedia/14ec29f2-6969-4e1a-9763-e1a6c45541ea/SMax.png.aspx?width=768&height=432&ext=.png' },
      //
      { modelName: 'Edge', modelCost: 220000, modelImgSrc: 'https://www.ford.com.tr/getmedia/afeeb7a7-b3d9-4a20-8925-755b539a115a/EDGE.png.aspx?width=768&height=432&ext=.png' },
      { modelName: 'Mustang', modelCost: 420000, modelImgSrc: 'https://www.ford.com.tr/getmedia/b834300a-72f9-42d0-b6de-4f3b3d542604/MUSTANG.png.aspx?width=768&height=432&ext=.png' },
      { modelName: 'Kuga', modelCost: 190000, modelImgSrc: 'https://www.ford.com.tr/getmedia/33286545-cfe4-42f2-9252-3340baebc422/deucbs03yymbs-savs-diacmaa(a)(a)pn3jvshowroom_0_0.png.aspx?width=768&height=432&ext=.png' },
      //
      { modelName: 'Ford-GT', modelCost: 1200000, modelImgSrc: 'https://www.ford.com.tr/getmedia/36035036-5460-4da3-a776-a02ab9f500ed/fordgt.png.aspx?width=618&height=348&ext=.png' },
    ]
  }
  modelSelect(model) {
    //just added console.log which will display the event details in browser on click of the button.
    this.router.navigateByUrl('/colors', { state: model })
  }
}


