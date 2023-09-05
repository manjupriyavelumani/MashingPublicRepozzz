import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesComponent } from './issues.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {CdkAccordionModule} from '@angular/cdk/accordion'; 


describe('IssuesComponent', () => {
  let component: IssuesComponent;
  let fixture: ComponentFixture<IssuesComponent>;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    const authServiceStub = ()=>(
      {
        repoIssuesData: ()=>({
          subscribe: (response: any)=>response([
            {
              "url": "https://api.github.com/repos/rubinius/rubinius/issues/3837",
              "repository_url": "https://api.github.com/repos/rubinius/rubinius",
              "labels_url": "https://api.github.com/repos/rubinius/rubinius/issues/3837/labels{/name}",
              "comments_url": "https://api.github.com/repos/rubinius/rubinius/issues/3837/comments",
              "events_url": "https://api.github.com/repos/rubinius/rubinius/issues/3837/events",
              "html_url": "https://github.com/rubinius/rubinius/issues/3837",
              "id": 891182078,
              "node_id": "MDU6SXNzdWU4OTExODIwNzg=",
              "number": 3837,
              "title": "Error on installing rbx-2 with rvm on wsl ubuntu 20.04",
              "user": {
                  "login": "sartimo",
                  "id": 71646577,
                  "node_id": "MDQ6VXNlcjcxNjQ2NTc3",
                  "avatar_url": "https://avatars.githubusercontent.com/u/71646577?v=4",
                  "gravatar_id": "",
                  "url": "https://api.github.com/users/sartimo",
                  "html_url": "https://github.com/sartimo",
                  "followers_url": "https://api.github.com/users/sartimo/followers",
                  "following_url": "https://api.github.com/users/sartimo/following{/other_user}",
                  "gists_url": "https://api.github.com/users/sartimo/gists{/gist_id}",
                  "starred_url": "https://api.github.com/users/sartimo/starred{/owner}{/repo}",
                  "subscriptions_url": "https://api.github.com/users/sartimo/subscriptions",
                  "organizations_url": "https://api.github.com/users/sartimo/orgs",
                  "repos_url": "https://api.github.com/users/sartimo/repos",
                  "events_url": "https://api.github.com/users/sartimo/events{/privacy}",
                  "received_events_url": "https://api.github.com/users/sartimo/received_events",
                  "type": "User",
                  "site_admin": false
              },
              "labels": [],
              "state": "open",
              "locked": false,
              "assignee": null,
              "assignees": [],
              "milestone": null,
              "comments": 1,
              "created_at": "2021-05-13T16:22:57Z",
              "updated_at": "2021-05-14T00:48:24Z",
              "closed_at": null,
              "author_association": "NONE",
              "active_lock_reason": null,
              "body": "Hello, \r\n\r\nI just wanted to install rubinius on my env which just failed. The command is below: (even latest version)\r\n\r\n```bash\r\nrvm use rbx --install --binary --fuzzy\r\n```\r\n\r\nI have ruby 2.3.1 preinstalled and the rvm version is as follows: ```rvm 1.29.12-next (master) by Michal Papis, Piotr Kuczynski, Wayne E. Seguin [https://rvm.io]```\r\n\r\nThe error message appears like so:\r\n\r\n```bash\r\n$ rvm use rbx --install --binary --fuzzy\r\n\r\nSearching for binary rubies, this might take some time.\r\nNo binary rubies available for: ubuntu/20.04/x86_64/rbx-4.1.\r\nContinuing with compilation. Please read 'rvm help mount' to get more information on binary rubies.\r\nChecking requirements for ubuntu.\r\nInstalling requirements for ubuntu.\r\nUpdating system...................\r\nInstalling required packages: ruby-dev, libssl-dev, clang-4.0, llvm-4.0, llvm-4.0-dev, libc++-dev, libc++abi-dev....\r\nError running 'requirements_debian_libs_install ruby-dev libssl-dev clang-4.0 llvm-4.0 llvm-4.0-dev libc++-dev libc++abi-dev',\r\nplease read /home/sarti/.rvm/log/1620922490_rbx-4.1/package_install_ruby-dev_libssl-dev_clang-4.0_llvm-4.0_llvm-4.0-dev_libc++-dev_libc++abi-dev.log\r\nRequirements installation failed with status: 100.\r\n```\r\n\r\nThe log tells me, that the packages are inexistant. I extended my sources.list file but it didn't work tho. \r\nCan anyone help me please ?\r\n\r\nBest regards\r\n\r\nTimo",
              "reactions": {
                  "url": "https://api.github.com/repos/rubinius/rubinius/issues/3837/reactions",
                  "total_count": 0,
                  "+1": 0,
                  "-1": 0,
                  "laugh": 0,
                  "hooray": 0,
                  "confused": 0,
                  "heart": 0,
                  "rocket": 0,
                  "eyes": 0
              },
              "timeline_url": "https://api.github.com/repos/rubinius/rubinius/issues/3837/timeline",
              "performed_via_github_app": null,
              "state_reason": null
          }
          ])
        }),
        cmtData: ()=>({
          subscribe: (response: any)=>response([
            {
              "url": "https://api.github.com/repos/mojombo/grit/issues/comments/877106323",
              "html_url": "https://github.com/mojombo/grit/issues/275#issuecomment-877106323",
              "issue_url": "https://api.github.com/repos/mojombo/grit/issues/275",
              "id": 877106323,
              "node_id": "MDEyOklzc3VlQ29tbWVudDg3NzEwNjMyMw==",
              "user": {
                  "login": "cdn2021",
                  "id": 78522762,
                  "node_id": "MDQ6VXNlcjc4NTIyNzYy",
                  "avatar_url": "https://avatars.githubusercontent.com/u/78522762?v=4",
                  "gravatar_id": "",
                  "url": "https://api.github.com/users/cdn2021",
                  "html_url": "https://github.com/cdn2021",
                  "followers_url": "https://api.github.com/users/cdn2021/followers",
                  "following_url": "https://api.github.com/users/cdn2021/following{/other_user}",
                  "gists_url": "https://api.github.com/users/cdn2021/gists{/gist_id}",
                  "starred_url": "https://api.github.com/users/cdn2021/starred{/owner}{/repo}",
                  "subscriptions_url": "https://api.github.com/users/cdn2021/subscriptions",
                  "organizations_url": "https://api.github.com/users/cdn2021/orgs",
                  "repos_url": "https://api.github.com/users/cdn2021/repos",
                  "events_url": "https://api.github.com/users/cdn2021/events{/privacy}",
                  "received_events_url": "https://api.github.com/users/cdn2021/received_events",
                  "type": "User",
                  "site_admin": false
              },
              "created_at": "2021-07-09T11:09:06Z",
              "updated_at": "2021-07-09T11:09:06Z",
              "author_association": "NONE",
              "body": "https://api.github.com/repositories/1",
              "reactions": {
                  "url": "https://api.github.com/repos/mojombo/grit/issues/comments/877106323/reactions",
                  "total_count": 0,
                  "+1": 0,
                  "-1": 0,
                  "laugh": 0,
                  "hooray": 0,
                  "confused": 0,
                  "heart": 0,
                  "rocket": 0,
                  "eyes": 0
              },
              "performed_via_github_app": null
          }
          ])
        })
      }
    )
    TestBed.configureTestingModule({
      declarations: [IssuesComponent],
      imports: [ HttpClientTestingModule, CdkAccordionModule ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{
        provide: AuthService,
        useFactory: authServiceStub
      }]

    });
    fixture = TestBed.createComponent(IssuesComponent);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Get data for issues comments',()=>{
    const authService: AuthService = fixture.debugElement.injector.get(AuthService);
    spyOn(authService, 'repoIssuesData').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toBeTruthy();
  })
  it('Handle pagination',()=>{
     const event = {
      length: 10,
      pageIndex : 0,
      pageSize: 5
     }
     component.handlePageEvent(event);
     expect(component.handlePageEvent).toBeTruthy();
  })
  it('display comments',()=>{
    const authService: AuthService = fixture.debugElement.injector.get(AuthService);
    spyOn(authService, 'displayCmts' ).and.callThrough();
    component.showComments('https://api.github.com/repos/mojombo/grit/issues/275/comments')
    expect(component.showComments).toBeTruthy();

  })

});
