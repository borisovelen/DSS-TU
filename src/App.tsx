import React, { ChangeEvent, FormEvent, useState } from 'react';
import './App.css';
import { Recipe } from './interfaces';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';

function App() {
  let shkembe: Recipe = {
    id:1,
    name:"Banana Bread",
    ingredients:"Flour, Baking soda, Salt, Butter, Brown sugar, Eggs, Bananas",
    instructions:"1. Combine the dry ingredients in one",
    cookingTime:40,
    publicationDate: new Date(),
  };
  let tutmanik: Recipe = {
    id:2,
    name:"Tutmanik",
    ingredients:"mlqko\nshkembe\ncherven piper",
    instructions:"slagate shkembeto da zavri, sled tova go qdete",
    cookingTime:30,
    publicationDate: new Date(),
  };
  let banica: Recipe = {
    id:3,
    name:"Banica",
    ingredients:"mlqko\nshkembe\ncherven piper",
    instructions:"slagate shkembeto da zavri, sled tova go qdete",
    cookingTime:20,
    publicationDate: new Date(),
  };

  const emptyRecipe: Recipe = {
    id:-1,
    name:"",
    ingredients:"",
    instructions:"",
    cookingTime:0,
    publicationDate: new Date(),
}
  const [recipes, setRecipes] = useState([shkembe,tutmanik,banica]);
  const [selectedRecipe, setSelectedRecipe] = useState(emptyRecipe);


  function selectRecipe(recipe: Recipe){
    setSelectedRecipe(recipe);
  }
  function clearForm(){
    setSelectedRecipe(emptyRecipe);
  }
  function removeRecipe(recipe: Recipe){
    const updatedRecipesList = recipes.filter(item => item!==recipe);
    for(let e of updatedRecipesList){
      if(e.id>recipe.id) e.id--;
    }
    setRecipes(updatedRecipesList);
    if(selectedRecipe===recipe){
      clearForm();
    }
  }
  function addRecipe(recipe:Recipe){
    clearForm();
    recipe.id = recipes.length + 1;
    let recipeList = [...recipes, recipe];
    setRecipes(recipeList);
  }
  function updateRecipe(recipe:Recipe){
    let recipeIndex = recipes.findIndex((item) => item.id === recipe.id);
    let recipeArr = [...recipes];
    let updatedRecipe = { ...recipes[recipeIndex] };
    updatedRecipe = recipe;
    recipeArr[recipeIndex] = updatedRecipe;
    setRecipes(recipeArr);
    clearForm();
  }

  
  return (
    <>
      <div className="header">
        <h1>ELEN'S KITCHEN</h1>
      </div>
      <div className="main row">
        <div className="content-list col-md-8">
            <RecipeList recipes={recipes} onSelectRecipe={selectRecipe} onRemoveRecipe={removeRecipe}/>
        </div>
        <div className="content-details col-md-4">
            <RecipeDetails selectedRecipe={selectedRecipe} emptyRecipe={emptyRecipe} onSave={addRecipe} onUpdate={updateRecipe} clearForm={clearForm}/>
        </div>
      </div>
      <div className="footer">
        <p>©2023 ELEN'S KITCHEN</p>
      </div>
    </>
  );
}

export default App;
