/* eslint-disable @typescript-eslint/dot-notation */
import { ArticlesApi } from './../models/articles-interface';
import { HttpService } from './utils/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  baseUrl = 'https://api.webz.io';

  nextLink: string;
  constructor(private httpService: HttpService) {}

  async getArticles(page: number = 1): Promise<any> {
    const data = {
      token: '94b8be1b-b082-4b91-b631-a821a8c1815f',
      q: 'site_type:news country:CL reciclaje recicla',
      size: 10,
    };
    const response = await this.httpService
      .get(`${this.baseUrl}/filterWebContent`, data)
      .toPromise();
    this.nextLink = response['next'];
    return response['posts'];
  }

  async getNextPage(): Promise<any> {
    const response = await this.httpService
      .get(this.baseUrl + this.nextLink)
      .toPromise();
    this.nextLink = response['next'];
    return response['posts'];
  }
}
