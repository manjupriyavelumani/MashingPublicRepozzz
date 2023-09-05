import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';


describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
let responseData = [{
  "id": 26,
  "node_id": "MDEwOlJlcG9zaXRvcnkyNg==",
  "name": "merb-core",
  "full_name": "wycats/merb-core",
  "private": false,
  "owner": {
      "login": "wycats",
      "id": 4,
      "node_id": "MDQ6VXNlcjQ=",
      "avatar_url": "https://avatars.githubusercontent.com/u/4?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/wycats",
      "html_url": "https://github.com/wycats",
      "followers_url": "https://api.github.com/users/wycats/followers",
      "following_url": "https://api.github.com/users/wycats/following{/other_user}",
      "gists_url": "https://api.github.com/users/wycats/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/wycats/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/wycats/subscriptions",
      "organizations_url": "https://api.github.com/users/wycats/orgs",
      "repos_url": "https://api.github.com/users/wycats/repos",
      "events_url": "https://api.github.com/users/wycats/events{/privacy}",
      "received_events_url": "https://api.github.com/users/wycats/received_events",
      "type": "User",
      "site_admin": false
  },
  "html_url": "https://github.com/wycats/merb-core",
  "description": "Merb Core: All you need. None you don't.",
  "fork": false,
  "url": "https://api.github.com/repos/wycats/merb-core",
  "forks_url": "https://api.github.com/repos/wycats/merb-core/forks",
  "keys_url": "https://api.github.com/repos/wycats/merb-core/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/wycats/merb-core/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/wycats/merb-core/teams",
  "hooks_url": "https://api.github.com/repos/wycats/merb-core/hooks",
  "issue_events_url": "https://api.github.com/repos/wycats/merb-core/issues/events{/number}",
  "events_url": "https://api.github.com/repos/wycats/merb-core/events",
  "assignees_url": "https://api.github.com/repos/wycats/merb-core/assignees{/user}",
  "branches_url": "https://api.github.com/repos/wycats/merb-core/branches{/branch}",
  "tags_url": "https://api.github.com/repos/wycats/merb-core/tags",
  "blobs_url": "https://api.github.com/repos/wycats/merb-core/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/wycats/merb-core/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/wycats/merb-core/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/wycats/merb-core/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/wycats/merb-core/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/wycats/merb-core/languages",
  "stargazers_url": "https://api.github.com/repos/wycats/merb-core/stargazers",
  "contributors_url": "https://api.github.com/repos/wycats/merb-core/contributors",
  "subscribers_url": "https://api.github.com/repos/wycats/merb-core/subscribers",
  "subscription_url": "https://api.github.com/repos/wycats/merb-core/subscription",
  "commits_url": "https://api.github.com/repos/wycats/merb-core/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/wycats/merb-core/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/wycats/merb-core/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/wycats/merb-core/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/wycats/merb-core/contents/{+path}",
  "compare_url": "https://api.github.com/repos/wycats/merb-core/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/wycats/merb-core/merges",
  "archive_url": "https://api.github.com/repos/wycats/merb-core/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/wycats/merb-core/downloads",
  "issues_url": "https://api.github.com/repos/wycats/merb-core/issues{/number}",
  "pulls_url": "https://api.github.com/repos/wycats/merb-core/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/wycats/merb-core/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/wycats/merb-core/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/wycats/merb-core/labels{/name}",
  "releases_url": "https://api.github.com/repos/wycats/merb-core/releases{/id}",
  "deployments_url": "https://api.github.com/repos/wycats/merb-core/deployments"
}];
let branchData = [
        
  {
    "name": "master",
    "commit": {
        "sha": "5608567286e64a1c55c5e7fcd415364e04f8986e",
        "url": "https://api.github.com/repos/mojombo/grit/commits/5608567286e64a1c55c5e7fcd415364e04f8986e"
    },
    "protected": false
}
];
let repoDetails = {
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
};
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Token Authentication',()=>{
    console.log(responseData);

service.authPAT('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').subscribe((res) => {
  console.log('getMerchantData', res.data)
  expect(res.length).toBeGreaterThan(0)
});
// you have to know your Base URL and put it in the placeholder below
const req = httpMock.expectOne(`https://api.github.com/repositories`);
expect(req.request.method).toEqual('GET'); // expect a get request
req.flush(responseData); // give this response to the API call in queue
  })
  it('should give branch details',()=>{
    service.branchDetails('https://api.github.com/repos/mojombo/grit/branches').subscribe((res)=>{
      expect(res).toBeFalsy();
    })
    const req = httpMock.expectOne('https://api.github.com/repos/mojombo/grit/branches');
    expect(req.request.method).toEqual('GET');
    req.flush(branchData);
  })
  it('should get RepoDetails',()=>{
    service.getDetails('https://api.github.com/repos/mojombo/grit').subscribe((res)=>{
      expect(res).toBeTruthy();
    })
    const req = httpMock.expectOne('https://api.github.com/repos/mojombo/grit');
expect(req.request.method).toBe('GET');
req.flush(repoDetails);
  })
});
