import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  taskForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.editData) {
      this.taskForm.patchValue({
        title: this.editData.title,
        description: this.editData.description
      });
    }
  }
}
