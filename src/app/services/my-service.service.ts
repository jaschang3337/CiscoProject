import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
//import {Observable} from 'rxjs/Observable';
import {Observable} from 'rxjs';
import {Cookie} from 'ng2-cookies';
//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/map';
import {UserData} from '../model/user-data';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private myNodeUrl = 'http://localhost:8083/api/user';

  constructor(private httpClient: HttpClient) { }

  uData: UserData;

  getUserData(): Promise<UserData > {

    /* This for rx suscribe and obeserable */

    /*
    this.httpClient.get(this.myNodeUrl,
     {observe: 'response'})
 //      {observe: 'response', headers:  new HttpHeaders().set('Authorization', 'Bearer ' + Cookie.get('access_token'))})
     .subscribe(res => {
       console.log(res.body["hits"].length);
       console.log(res.body["hits"][0]["recipe"]);

       for (var i=0; i<res.body["hits"].length; i++) {
         console.log(res.body["hits"][i]["recipe"]);
         this.recipes.push(res.body["hits"][i]["recipe"]);
       }

      });
    return Promise.resolve(this.recipes);
     */

    this.httpClient.get(this.myNodeUrl,
      {observe: 'response', headers:  new HttpHeaders().set('Access-Control-Allow-Origin', '*')})
//      {observe: 'response'})
      .toPromise()
      .then(this.extractData)
      .catch(err => {
          return Promise.reject(err.error);
        }
      );

    return Promise.resolve(this.uData);

  }

  extractData(res: HttpResponse<Object>) {

    const userData = new UserData();

    console.log(res.body);
    Object.assign(userData, res.body);
    console.log(userData);
  }

}
