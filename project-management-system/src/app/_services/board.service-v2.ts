import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Board } from "../_models/Board";
import { Column } from "../_models/Board";

import { environment } from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class BoardServiceV2 {
  constructor(
    private http: HttpClient
  ) {}

  create(title: string, userId: string) {
    return this.http.post(`${environment.apiUrl}/boards`, {'title': title, 'owner': userId, 'users': []});
  }

  getAll() {
    return this.http.get<Board[]>(`${environment.apiUrl}/boards`);
  }

  getById(id: string) {
    return this.http.get(`${environment.apiUrl}/boards/${id}`);
  }

  delete(id: string) {
    return this.http.delete(`${environment.apiUrl}/boards/${id}`);
  }

  getColumns(boardId: string) {
    return this.http.get<Column[]>(`${environment.apiUrl}/boards/${boardId}/columns`);
  }

  createColumn(boardId: string, title: string, order: number) {
    return this.http.post(`${environment.apiUrl}/boards/${boardId}/columns`, {'title': title, 'order': order});
  }

  deleteColumn(boardId: string | undefined, columnId: string ) {
    return this.http.delete(`${environment.apiUrl}/boards/${boardId}/columns/${columnId}`);
  }
}
