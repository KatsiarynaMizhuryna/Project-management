import { Injectable } from '@angular/core';
import { MatDialog} from "@angular/material/dialog";
import { DialogComponent} from "../dialog/dialog.component";
import {
  AddNewElementDialogBodyComponent
} from "../board-page/add-new-element-dialog-body/add-new-element-dialog-body.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(message: string){
    return this.dialog.open(DialogComponent,{
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: "150px" },
      data :{
        message : message
      }
    });
  }

}
