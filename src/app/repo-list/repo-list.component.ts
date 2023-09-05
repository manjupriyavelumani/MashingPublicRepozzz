import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Repo } from '../model/data';
import { PageEvent } from '@angular/material/paginator';
import { browserRefresh } from '../app.component';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent {
  constructor(private router: Router, private authService: AuthService,) {
  // Routing to login page on browser refresh
    if (browserRefresh) {
      this.router.navigateByUrl('');
    }
  }
  fromRepoList: Boolean = false;
  headData = '';
  repositoryData: Repo[] = [];
  repositoryDataSliced: Repo[] = [];
  hoverElement: any;

  ngOnInit() {
    this.fromRepoList = true;
    this.headData = 'List of GitHub Public Reositories'
  // Getting public repo list form backend
    this.authService.beSubject.subscribe((result: any) => {
      result.forEach((element: any) => {
        let dataArray = {
          fullname: '',
          description: '',
          iconUrl: ''
        }
        dataArray.fullname = element.full_name;
        dataArray.description = element.description;
        dataArray.iconUrl = element.owner.avatar_url
        this.repositoryData.push(dataArray);
      });
    })
    this.repositoryDataSliced = this.repositoryData.slice(0, 10);
  }

// pagination
  length = this.repositoryData.length;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;
handlePageEvent(event: PageEvent) {
  console.log('pageEvenet',event )
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.repositoryData.length) {
      endIndex = this.repositoryData.length;
    }
    this.repositoryDataSliced = this.repositoryData.slice(startIndex, endIndex)
}
// getting selected repo details
naviToDetails(value: any) {
    this.authService.detailsSubject.next(value);
    this.router.navigateByUrl('repoDetail');
}

}
