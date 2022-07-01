import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  //Recipe is basically coming from the recipe.model.ts
  recipes: Recipe[] = [
    //When we call the method like this we actually call the constructor
    new Recipe('A Test Recipe', 'A description for a test recipe', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/6/10/0/FNM070117_Warm-Farro-Salad-with-Charred-Corn_s4x3.jpg.rend.hgtvcom.406.271.suffix/1497141547192.jpeg') 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
