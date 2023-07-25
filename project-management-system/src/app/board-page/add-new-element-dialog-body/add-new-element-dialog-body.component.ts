import { Component,OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-element-dialog-body',
  templateUrl: './add-new-element-dialog-body.component.html',
  styleUrls: ['./add-new-element-dialog-body.component.css']
})
export class AddNewElementDialogBodyComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddNewElementDialogBodyComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
