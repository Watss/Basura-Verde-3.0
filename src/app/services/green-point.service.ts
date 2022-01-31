/* eslint-disable @typescript-eslint/dot-notation */
import { Point } from './../models/point-interface';
import { HttpService } from './utils/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreenPointService {
  baseUrl = 'https://basuraverde.herokuapp.com/api/v2';

  constructor(private httpService: HttpService) { }

  async getAllPoints(): Promise<Point[]>{
    const response = await this.httpService
      .get(`${this.baseUrl}/points`)
      .toPromise();
      return response['data'];
  }
}

