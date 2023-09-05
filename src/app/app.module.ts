import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule, DatePipe } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';
import { DetailsComponent } from './details/details.component';
import {MatTabsModule} from '@angular/material/tabs';
import { IssuesComponent } from './issues/issues.component';
import {CdkAccordionModule} from '@angular/cdk/accordion'; 
import {ScrollingModule} from '@angular/cdk/scrolling';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RepoheaderComponent } from './repoheader/repoheader.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';

 import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';

 NgChartsModule 
@NgModule({
  declarations: [
    AppComponent,
    RepoheaderComponent,
    RepoListComponent,
    DetailsComponent,
    LoginComponent,
    RepoDetailsComponent,
    IssuesComponent
     ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatPaginatorModule,
    NoopAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    CdkAccordionModule,
    ScrollingModule,   
    MatGridListModule,
    MatListModule,    
    MatFormFieldModule, MatInputModule, MatButtonModule,
    NgChartsModule,
    NgApexchartsModule,
    MatSelectModule, 
  ],
  exports: [RepoheaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
