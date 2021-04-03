import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export type matDialogAction = 'confirm' | 'dismiss';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string, message: string },
    private dialogRef: MatDialogRef<AlertDialogComponent>) { }

  public cancel(): void {
    this.dialogRef.close('dismiss');
  }

  public confirm(): void {
    this.dialogRef.close('confirm');
  }

}
