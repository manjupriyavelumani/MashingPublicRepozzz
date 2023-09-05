import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AuthService } from '../service/auth.service';
import { issueData } from '../model/issueData';
import { commentData } from '../model/issueData';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']

})
export class IssuesComponent {
  constructor(private authService: AuthService) { }
  
  expandedIndex = 0;
  issueDetails: issueData[] = [];
  sortedIssues: issueData[] = [];
  issueDataSliced: issueData[] = [];
  commentDetails: commentData[] = [];
  datePipe = new DatePipe('');
  emptyComment: Boolean = false;
  @Input() repoClicked: any;
  noIssue: Boolean= false;

  ngOnInit() {
    // Getting Issue list
    this.authService.repoIssuesData(this.repoClicked).subscribe((result: any) => {
      // Sorting issues with comments count
      result = result.sort((a: any, b: any) => b.comments - a.comments)
      console.log('issue result', result);
      result.forEach((element: any) => {
        let dataArray = {
          issueTitle: '',
          commentsCount: 0,
          commentsUrl: ''
        }
        dataArray.issueTitle = element.title;
        dataArray.commentsCount = element.comments;
        dataArray.commentsUrl = element.comments_url
        this.issueDetails.push(dataArray);
      });
      this.issueDataSliced = this.issueDetails.slice(0, 5);
      if(this.issueDataSliced.length == 0){
        this.noIssue = true;
      }
    });

  }
  // Displaying comments
  showComments(url: any) {
    this.commentDetails = [];
    console.log('url', url);
    this.authService.displayCmts(url).subscribe((result: any) => {
      console.log('display comments', result)
      if (result.length != 0) {
        this.emptyComment = false;
        result.forEach((element: any) => {
          let cmtArray = {
            userName: '',
            cmtData: '',
            userAvatar: '',
            lastUpdate: ''
          }
          cmtArray.userName = element.user.login;
          cmtArray.cmtData = element.body;
          cmtArray.userAvatar = element.user.avatar_url;
          cmtArray.lastUpdate = element.updated_at;
          this.commentDetails.push(cmtArray);
        })
      } else {
        this.emptyComment = true;
      }
    })
  }
  // Applying Pagination
  length = this.issueDetails.length;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 7, 10];
  showFirstLastButtons = true;
  handlePageEvent(event: PageEvent) {
   
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.issueDetails.length) {
      endIndex = this.issueDetails.length;
    }
    this.issueDataSliced = this.issueDetails.slice(startIndex, endIndex)
  }

}
