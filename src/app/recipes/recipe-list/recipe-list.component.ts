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
    new Recipe('A Test Recipe', 'A description for a test recipe', 'https://static.independent.co.uk/2022/04/25/10/iStock-1307275916.jpg?quality=50&width=640&auto=webp'),
    new Recipe('A Test Recipe', 'A description for a test recipe', 'https://static.independent.co.uk/2022/04/25/10/iStock-1307275916.jpg?quality=50&width=640&auto=webp') 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
