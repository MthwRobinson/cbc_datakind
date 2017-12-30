import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { MyActivitiesComponent } from './my-activities/my-activities.component';
import { MyActivitiesEditComponent } from './my-activities/my-activities-edit/my-activities-edit.component';
import { MyActivitiesService } from './my-activities/my-activities.service';
import { ComplexityComponent } from './complexity/complexity.component';
import { OptimizerComponent } from './optimizer/optimizer.component';
import { LeafletComponent } from './optimizer/leaflet/leaflet.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    MyActivitiesComponent,
    MyActivitiesEditComponent,
    ComplexityComponent,
    OptimizerComponent,
    LeafletComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LeafletModule.forRoot()
  ],
  providers: [MyActivitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
