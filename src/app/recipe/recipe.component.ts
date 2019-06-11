import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  isLoaded = false;
  restItems: any = {};
  keys : string [];
  recipekeys : string [];

  private restItemsUrl = 'https://www.food2fork.com/api/search?key=a702851b098e22c0836738d9a18c2b28&q=shredded%20chicken';

  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.getRestItems();
  }

  getRestItemsAPI() {
    return this.http
      .get(this.restItemsUrl)
      .pipe(map( (res: Response )=> res));
  }

  getRestItems() {
    this.getRestItemsAPI()
      .subscribe(
        restItems => {
          this.restItems = restItems["recipes"];
          this.keys = Object.keys(this.restItems);
          this.recipekeys = Object.keys(this.restItems[0]);
          console.log(this.restItems);
          console.log(this.keys);
          console.log(this.recipekeys);
          this.isLoaded = true;
        }
      )
  }

}
