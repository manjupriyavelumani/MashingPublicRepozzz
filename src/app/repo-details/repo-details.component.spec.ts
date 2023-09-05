import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepoDetailsComponent } from './repo-details.component';
import {  HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { of } from 'rxjs';

describe('RepoDetailsComponent', () => {
  let component: RepoDetailsComponent;
  let fixture: ComponentFixture<RepoDetailsComponent>;
  let httpClient: HttpClient;
  let authServiceSub = ()=>({
    getDetails:()=>({
subscribe:(result: any)=>result({
  "id": 1,
  "node_id": "MDEwOlJlcG9zaXRvcnkx",
  "name": "grit",
  "full_name": "mojombo/grit",
  "private": false,
  "owner": {
      "login": "mojombo",
      "id": 1,
      "node_id": "MDQ6VXNlcjE=",
      "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mojombo",
      "html_url": "https://github.com/mojombo",
      "followers_url": "https://api.github.com/users/mojombo/followers",
      "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
      "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
      "organizations_url": "https://api.github.com/users/mojombo/orgs",
      "repos_url": "https://api.github.com/users/mojombo/repos",
      "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mojombo/received_events",
      "type": "User",
      "site_admin": false
  },
  "html_url": "https://github.com/mojombo/grit",
  "description": "**Grit is no longer maintained. Check out libgit2/rugged.** Grit gives you object oriented read/write access to Git repositories via Ruby.",
  "fork": false,
  "url": "https://api.github.com/repos/mojombo/grit",
  "forks_url": "https://api.github.com/repos/mojombo/grit/forks",
  "keys_url": "https://api.github.com/repos/mojombo/grit/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/mojombo/grit/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/mojombo/grit/teams",
  "hooks_url": "https://api.github.com/repos/mojombo/grit/hooks",
  "issue_events_url": "https://api.github.com/repos/mojombo/grit/issues/events{/number}",
  "events_url": "https://api.github.com/repos/mojombo/grit/events",
  "assignees_url": "https://api.github.com/repos/mojombo/grit/assignees{/user}",
  "branches_url": "https://api.github.com/repos/mojombo/grit/branches{/branch}",
  "tags_url": "https://api.github.com/repos/mojombo/grit/tags",
  "blobs_url": "https://api.github.com/repos/mojombo/grit/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/mojombo/grit/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/mojombo/grit/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/mojombo/grit/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/mojombo/grit/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/mojombo/grit/languages",
  "stargazers_url": "https://api.github.com/repos/mojombo/grit/stargazers",
  "contributors_url": "https://api.github.com/repos/mojombo/grit/contributors",
  "subscribers_url": "https://api.github.com/repos/mojombo/grit/subscribers",
  "subscription_url": "https://api.github.com/repos/mojombo/grit/subscription",
  "commits_url": "https://api.github.com/repos/mojombo/grit/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/mojombo/grit/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/mojombo/grit/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/mojombo/grit/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/mojombo/grit/contents/{+path}",
  "compare_url": "https://api.github.com/repos/mojombo/grit/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/mojombo/grit/merges",
  "archive_url": "https://api.github.com/repos/mojombo/grit/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/mojombo/grit/downloads",
  "issues_url": "https://api.github.com/repos/mojombo/grit/issues{/number}",
  "pulls_url": "https://api.github.com/repos/mojombo/grit/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/mojombo/grit/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/mojombo/grit/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/mojombo/grit/labels{/name}",
  "releases_url": "https://api.github.com/repos/mojombo/grit/releases{/id}",
  "deployments_url": "https://api.github.com/repos/mojombo/grit/deployments",
  "created_at": "2007-10-29T14:37:16Z",
  "updated_at": "2023-08-13T13:54:39Z",
  "pushed_at": "2023-08-17T19:15:41Z",
  "git_url": "git://github.com/mojombo/grit.git",
  "ssh_url": "git@github.com:mojombo/grit.git",
  "clone_url": "https://github.com/mojombo/grit.git",
  "svn_url": "https://github.com/mojombo/grit",
  "homepage": "http://grit.rubyforge.org/",
  "size": 7954,
  "stargazers_count": 1963,
  "watchers_count": 1963,
  "language": "Ruby",
  "has_issues": true,
  "has_projects": true,
  "has_downloads": true,
  "has_wiki": true,
  "has_pages": false,
  "has_discussions": false,
  "forks_count": 534,
  "mirror_url": null,
  "archived": false,
  "disabled": false,
  "open_issues_count": 30,
  "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
  },
  "allow_forking": true,
  "is_template": false,
  "web_commit_signoff_required": false,
  "topics": [],
  "visibility": "public",
  "forks": 534,
  "open_issues": 30,
  "watchers": 1963,
  "default_branch": "master",
  "temp_clone_token": null,
  "network_count": 534,
  "subscribers_count": 72
}
  
)
    }),
    branchDetails: ()=>({
      subscribe: (response: any)=>response([
        
        {
          "name": "master",
          "commit": {
              "sha": "5608567286e64a1c55c5e7fcd415364e04f8986e",
              "url": "https://api.github.com/repos/mojombo/grit/commits/5608567286e64a1c55c5e7fcd415364e04f8986e"
          },
          "protected": false
      }
      ])
    }),
    getTagCount: ()=>({
      subscribe: (result: any)=>result([
        {
          "name": "v2.5.0",
          "zipball_url": "https://api.github.com/repos/mojombo/grit/zipball/refs/tags/v2.5.0",
          "tarball_url": "https://api.github.com/repos/mojombo/grit/tarball/refs/tags/v2.5.0",
          "commit": {
              "sha": "7219ef6f98808069617fc0ac9e80f3bdfc68e990",
              "url": "https://api.github.com/repos/mojombo/grit/commits/7219ef6f98808069617fc0ac9e80f3bdfc68e990"
          },
          "node_id": "MDM6UmVmMTpyZWZzL3RhZ3MvdjIuNS4w"
      }
      ])
    }),
    getLanguage: ()=>({
      subscribe: (result: any)=> result({
        "Ruby": 219981
    })
    }),
    getContributors: ()=>({
      Subscribe: (result: any)=>result([
        {
          "login": "rtomayko",
          "id": 404,
          "node_id": "MDQ6VXNlcjQwNA==",
          "avatar_url": "https://avatars.githubusercontent.com/u/404?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/rtomayko",
          "html_url": "https://github.com/rtomayko",
          "followers_url": "https://api.github.com/users/rtomayko/followers",
          "following_url": "https://api.github.com/users/rtomayko/following{/other_user}",
          "gists_url": "https://api.github.com/users/rtomayko/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/rtomayko/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/rtomayko/subscriptions",
          "organizations_url": "https://api.github.com/users/rtomayko/orgs",
          "repos_url": "https://api.github.com/users/rtomayko/repos",
          "events_url": "https://api.github.com/users/rtomayko/events{/privacy}",
          "received_events_url": "https://api.github.com/users/rtomayko/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 64
      }
      ])
    })
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepoDetailsComponent],
      imports: [ HttpClientTestingModule ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{
        provide: AuthService,
        useFactory: authServiceSub
      }]
    });
    fixture = TestBed.createComponent(RepoDetailsComponent);
    httpClient = TestBed.inject(HttpClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get details',()=>{
    const authService : AuthService = fixture.debugElement.injector.get(AuthService);
    spyOn(authService, 'getDetails').and.callThrough();
    spyOn(authService, 'branchDetails').and.callThrough();
    spyOn(authService, 'getTagCount').and.callThrough();
    spyOn(authService, 'getLanguage').and.callThrough();
    spyOn(authService, 'getContributors').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toBeTruthy();
  })
});
