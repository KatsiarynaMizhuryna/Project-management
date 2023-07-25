import { Injectable } from '@angular/core';
import { Board} from "../_models/Board";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from "../../environments/environment";
import {first, map} from "rxjs/operators";


@Injectable({ providedIn: 'root' })
export class MainRouteService {

  constructor(private http: HttpClient) {}

  getAllBoards() {
    return this.http.get<Board[]>(`${environment.apiUrl}/boards`);
  }
  delete(id: string) {
    return this.http.delete(`${environment.apiUrl}/boards/${id}`)
  }

}
