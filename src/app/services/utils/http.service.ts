/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService{
  private headers = new HttpHeaders({
    'Accept' : 'application/vnd.api+json',
    'Content-Type' : 'application/vnd.api+json'
  });
  private options = { ...this.headers, withCredentials: false};

  constructor(private http: HttpClient) {}

  /* postLogin(serviceName: string, data: any){
    const headers = new HttpHeaders({
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    });
    const options = { headers, withCredentials: false};
    const url = environment.apiUrl + serviceName;

    return this.http.post(url,data, options);
  } */

  get(url,data = null){

   /*  const headers = new HttpHeaders({
      'Accept' : 'application/vnd.api+json',
      'Content-Type' : 'application/vnd.api+json',
      'Authorization' : `Bearer ${this.storageService.get(AuthConstants.authKey)}`
    }); */

    /* const options = { headers, withCredentials: false}; */
   /*  const url = environment.apiUrl + serviceName; */

    return this.http.get(url,{params: data});
  }
/*
  getFullUrl(url: string){
    const headers = new HttpHeaders({
      'Accept' : 'application/vnd.api+json',
      'Content-Type' : 'application/vnd.api+json',
      'Authorization' : `Bearer ${this.storageService.get(AuthConstants.authKey)}`
    });

    const options = { headers, withCredentials: false};
    return this.http.get(url,{...options});
  }

  post(serviceName: string, data: any){
    const headers = new HttpHeaders({
      'Accept' : 'application/vnd.api+json',
      'Content-Type' : 'application/vnd.api+json',
      'Authorization' : `Bearer ${this.storageService.get(AuthConstants.authKey)}`
    });
    const options = { headers, withCredentials: false};
    const url = environment.apiUrl + serviceName;
    return this.http.post(url,data, options);
  }

  patch(serviceName: string, data: any){
    const headers = new HttpHeaders({
      'Accept' : 'application/vnd.api+json',
      'Content-Type' : 'application/vnd.api+json',
      'Authorization' : `Bearer ${this.storageService.get(AuthConstants.authKey)}`
    });
    const options = { headers, withCredentials: false};
    const url = environment.apiUrl + serviceName;
    return this.http.patch(url,data, options);
  }

  delete(serviceName: string, data = null){
    const headers = new HttpHeaders({
      'Accept' : 'application/vnd.api+json',
      'Content-Type' : 'application/vnd.api+json',
      'Authorization' : `Bearer ${this.storageService.get(AuthConstants.authKey)}`
    });
    const options = { headers, withCredentials: false, params: data};
    const url = environment.apiUrl + serviceName;
    return this.http.delete(url,options);
  } */
}
