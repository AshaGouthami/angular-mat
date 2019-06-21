import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DemoMaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { CountriesService } from './countries.service';
import { DrapdownComponent } from './drapdown/drapdown.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTreeComponent } from './mat-tree/mat-tree.component';


@NgModule({
  declarations: [
    AppComponent,
    DrapdownComponent,
    MatTreeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [CountriesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
