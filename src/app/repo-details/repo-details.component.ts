import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../service/auth.service';
import { repoDetailsModel, contributersDetailsModel } from '../model/details';
import { ApexNonAxisChartSeries, ApexChart, ApexTheme, ApexTitleSubtitle } from "ng-apexcharts";

const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.scss'],

})
export class RepoDetailsComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private authService: AuthService,) {
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
    iconRegistry.addSvgIcon('branch', sanitizer.bypassSecurityTrustResourceUrl("../assets/icons/git_branch_icon.svg"));
    iconRegistry.addSvgIcon('branch_solid', sanitizer.bypassSecurityTrustResourceUrl("../assets/icons/branch_solid_icon.svg"));
    iconRegistry.addSvgIcon('tags', sanitizer.bypassSecurityTrustResourceUrl("../assets/icons/tags_icon.svg"));
    iconRegistry.addSvgIcon('eye', sanitizer.bypassSecurityTrustResourceUrl("../assets/icons/eye_icon.svg"));
    iconRegistry.addSvgIcon('fork', sanitizer.bypassSecurityTrustResourceUrl("../assets/icons/fork_icon.svg"));
    iconRegistry.addSvgIcon('star', sanitizer.bypassSecurityTrustResourceUrl("../assets/icons/star_icon.svg"));
    iconRegistry.addSvgIcon('dots', sanitizer.bypassSecurityTrustResourceUrl("../assets/icons/dots_icon.svg"));
  }


  @Input() repoDetails: any;
  repoDetailsData: repoDetailsModel = {};
  contributorsData: contributersDetailsModel[] = [];
  contributorsDataSliced: contributersDetailsModel[] = [];
  branchName: string[] = [];
  tagCount: number = 0;
  branchCount: number = 0;
  languagelist: any;
  languageName: any[] = [];
  languagePortion: any[] = [];
  languageCovered: any = [
    {
      data: []
    }
  ];
  contributorsName: any[] = [];
  contributorsAvatarUrl: any[] = [];
  contributorsLink: any[] = [];
  slice: Boolean = false;
  // Chart propertis
  chartTheme: ApexTheme = {
    mode: 'light',
    palette: 'palette4',
    monochrome: {
      enabled: false,
      color: '#546E7A',
      shadeTo: 'light',
      shadeIntensity: 0.65
    }
  }
  chartSeries: ApexNonAxisChartSeries = [];
  languageLabels: any[] = [];
  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true
    }
  }
  chartTitle: ApexTitleSubtitle = {
    text: 'Languages Used',
    align: 'center'
  }


  ngOnInit() {
    // Getting essential details of selected repo
    this.authService.getDetails(this.repoDetails).subscribe((result: any) => {
      console.log('getDetails',this.repoDetails );
      this.repoDetailsData.fullname = result.full_name;
      this.repoDetailsData.description = result.description;
      this.repoDetailsData.iconUrl = result.owner.avatar_url;
      this.repoDetailsData.watch = result.subscribers_count;
      this.repoDetailsData.forks = result.forks;
      this.repoDetailsData.visibility = result.visibility;
      this.repoDetailsData.createdOn = result.created_at;
      this.repoDetailsData.defaultBranch = result.default_branch;
      this.repoDetailsData.branchUrl = result.branches_url.replace('{/branch}', '');
      this.repoDetailsData.tagUrl = result.tags_url;
      this.repoDetailsData.starGazers = result.stargazers_count;
      this.repoDetailsData.languageUrl = result.languages_url;
      this.repoDetailsData.contributorsUrl = result.contributors_url;
      this.authService.branchDetails(this.repoDetailsData.branchUrl).subscribe((result: any) => {
        console.log('branchDetails',result );
        result.forEach((element: any) => {
          this.branchName.push(element.name);
          this.branchCount = this.branchName.length;
        })
      })
      this.authService.getTagCount(this.repoDetailsData.tagUrl).subscribe((result: any) => {
        console.log('getTagCount',result );

        this.tagCount = result.length;
      })
      this.authService.getLanguage(this.repoDetailsData.languageUrl).subscribe((result: any) => {
        console.log('getLanguage',result );
        this.languagelist = result;
        // Getting keys and values of language list
        for (var property in this.languagelist) {
          if (!this.languagelist.hasOwnProperty(property)) {
            continue;
          }
          this.languageName.push(property.toString());
          this.languagePortion.push(Number(this.languagelist[property]));
        }
        this.chartSeries = this.languagePortion;
        this.languageLabels = this.languageName;
      });
      // Getting Contributors Details
      this.authService.getContributors(this.repoDetailsData.contributorsUrl).subscribe((result: any) => {
        console.log('getContributors',result );
        result.forEach((element: any) => {
          let dataArray = {
            contributersName: '',
            contributersAvatarUrl: '',
            contributersLink: ''
          }
          dataArray.contributersName = element.login;
          dataArray.contributersAvatarUrl = element.avatar_url;
          dataArray.contributersLink = element.html_url;
          this.contributorsData.push(dataArray)
        })
        if (this.contributorsData.length >= 10) {
          this.slice = true;
          this.contributorsDataSliced = this.contributorsData.slice(0, 10);
        }

      })

    })
  }
  showAll() {
    this.slice = !this.slice;
    this.contributorsDataSliced = this.contributorsData;
  }

}

