import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecipeService} from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  searchValue: string ="";
  keys: string[];
  recipes : any;
  isLoaded = false;
  recipeLength : number;

  config: any;
  collection = { count: 900, data: [] };
 
  constructor(private recipeService: RecipeService) {
    this.config = {
      itemsPerPage: 30,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }
 
  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.searchValue = form.value.searchValue;
    this.recipeService.getRecipe(this.searchValue).subscribe(recipes => {
      this.keys = Object.keys(recipes);
      this.recipes = recipes[this.keys[1]];
      this.isLoaded = true;
      this.recipeLength = this.recipes.length;
    });
  }

  pageChanged(event){
    this.config.currentPage = event;
    console.log(this.config.currentPage)
    this.recipeService.changepage(this.config.currentPage).subscribe(recipes => {
      this.keys = Object.keys(recipes);
      this.recipes = recipes[this.keys[1]];
      this.isLoaded = true;
      this.recipeLength = this.recipes.length;
    });
  }


}
