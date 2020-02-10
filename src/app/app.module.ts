import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ModelsComponent } from "./pages/models/models.component";
import { ColorsComponent } from "./pages/colors/colors.component";
import { AccessoriesComponent } from "./pages/accessories/accessories.component";
import { SummaryComponent } from "./pages/summary/summary.component";


@NgModule({
  declarations: [AppComponent, ModelsComponent, ColorsComponent, AccessoriesComponent, SummaryComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }