import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-repoheader',
  templateUrl: './repoheader.component.html',
  styleUrls: ['./repoheader.component.scss']
})
export class RepoheaderComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public dialog: MatDialog) {
    iconRegistry.addSvgIcon('github_icon', sanitizer.bypassSecurityTrustResourceUrl("../assets/icons/github_icon.svg"));
  }

  @Input() btnEnable: any;
  @Input() headerData: any;
  changeApiBtn: Boolean = false
  headData = '';

  ngOnInit() {
    this.changeApiBtn = this.btnEnable;
    this.headData = this.headerData;
  }
  // confirmation popup to change API token
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

// Dialog Box Component
@Component({
  selector: 'app-dialog',
  templateUrl: '../dialog/dialog.component.html',
  styleUrls: ['../dialog/dialog.component.scss'],
  standalone: true,
  imports: [MatDialogModule]
})

export class DialogAnimationsExampleDialog {

  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, public router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.aClickedEvent
      .subscribe((data: string) => {});
  }
  // Routing to Login Page
  changePAT() {
    this.router.navigateByUrl('');
  }

}
