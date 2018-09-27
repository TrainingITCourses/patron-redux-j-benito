import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {

  constructor(private http: HttpClient) { }

  public getAgencies = (): Observable<any[]> =>
  this.http
    .get(environment.url + '/assets/launchagencies.json')
    .pipe(map((res: any) => res.agencies))

   public getMissionTypes = (): Observable<any[]> =>
    this.http
      .get(environment.url + '/assets/launchmissions.json')
      .pipe(map((res: any) => res.types))

  public getStatusTypes = (): Observable<any[]> =>
    this.http
      .get(environment.url + '/assets/launchstatus.json')
      .pipe(map((res: any) => res.types))

  public getLaunches = (): Observable<any[]> =>
    this.http
      .get(environment.url + '/assets/launchlibrary.json')
      .pipe(map((res: any) => res.launches))

}
