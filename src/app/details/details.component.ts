import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { browserRefresh } from '../app.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  constructor(private router: Router, private authService: AuthService, public dialog: MatDialog) {
    if (browserRefresh) {
      this.router.navigateByUrl('');
    }
  }
  fromRepoList: Boolean = false;
  repoName = '';
  headerName = '';
  issueLink = '';
  detailsLink = '';
  selectedRepo = {
   fullname: '',
   description: '',
   iconUrl: ''
  }
  ngOnInit() {
    this.fromRepoList = true;
    this.headerName = 'Details on Repository'
    // Getting user name
    this.authService.detailsSubject.subscribe((result: any) => {
      this.selectedRepo = result;
      this.repoName = this.selectedRepo.fullname;
    })
    // Getting api link for details and issue page
    this.authService.beSubject.subscribe((result: any) => {
      result.forEach((element: any) => {
        if (element.full_name === this.selectedRepo.fullname) {
          this.issueLink = element.issues_url.replace('{/number}', '')
          this.detailsLink = element.archive_url.replace('/{archive_format}{/ref}', '');
        }
      });
    })
  }
}
