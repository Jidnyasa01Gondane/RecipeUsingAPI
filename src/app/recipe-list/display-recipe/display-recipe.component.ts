import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/recipe.model';

@Component({
  selector: 'app-display-recipe',
  templateUrl: './display-recipe.component.html',
  styleUrls: ['./display-recipe.component.css']
})
export class DisplayRecipeComponent implements OnInit {

  @Input() recipe : Recipe;
  
  ngOnInit() {
  }


}
