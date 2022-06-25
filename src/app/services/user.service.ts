import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../interfaces";
import {Observable, of, pluck, switchMap,} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  public getUsers(num = 1): Observable<IUser[]> {
    // @ts-ignore
    return this.http.get<IUser[]>(`https://randomuser.me/api/?results=${num}`).pipe(
      pluck('results')
    )
  }
}
