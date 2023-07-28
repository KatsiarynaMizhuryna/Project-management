import { Component,OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-element-dialog-body',
  templateUrl: './add-new-element-dialog-body.component.html',
  styleUrls: ['./add-new-element-dialog-body.component.css']
})
export class AddNewElementDialogBodyComponent implements OnInit {
  titleForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddNewElementDialogBodyComponent>,
    private formBuilder: FormBuilder) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.titleForm = this.formBuilder.group({
      text: ['', Validators.required],
    });
  }
}
