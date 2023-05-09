import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { GalleryComponent } from './gallery/gallery.component';
import { PricesComponent } from './prices/prices.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LeadEmployeeComponent } from './lead-employee/lead-employee.component';
import { AreachartComponent } from './areachart/areachart.component';
import { TableComponent } from './table/table.component';
import { PiechartComponent } from './piechart/piechart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    MainContentComponent,
    GalleryComponent,
    PricesComponent,
    AddEmployeeComponent,
    LeadEmployeeComponent,
    AreachartComponent,
    TableComponent,
    PiechartComponent

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    HighchartsChartModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
