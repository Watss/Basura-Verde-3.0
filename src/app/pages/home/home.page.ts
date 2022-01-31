import { GreenPointService } from './../../services/green-point.service';
import { ArticlesService } from './../../services/articles.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/articles-interface';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  articles: Post[];

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.getArticles();
  }

  async getArticles() {
    this.articles = await this.articlesService.getArticles();
    console.log(this.articles);
  }

  async getMore() {
    this.articlesService.getNextPage();
  }

  async openArticleSite(url){
    await Browser.open({ url });
  };

  onImgError(event) {
    event.target.src =
      // eslint-disable-next-line max-len
      'https://media.istockphoto.com/photos/hand-holding-recycle-symbol-on-green-bokeh-background-eco-and-save-picture-id1023963786?k=20&m=1023963786&s=612x612&w=0&h=gnS5A4GBB8f7d3Wsg6d7wNcJXGSX_tXx4YCgHCDeOnY=';
    //Do other stuff with the event.target
  }
}
