import { useEffect } from "react";
import { Recipe, listProps } from "./interfaces";
import React from "react";

function RecipeList(props: listProps){
    function clickHandle(event: React.MouseEvent<HTMLLIElement>, item: Recipe){
        const element = event.target as HTMLElement;
        if(!element.classList.contains('deleteButton')){
            props.onSelectRecipe(item);
        }
    }

    return(
    <ul className="row recipe-list">
        {props.recipes.map((item)=>(
            <li onClick={(e) => clickHandle(e, item)} key={item.id} className="list-item">
              <div className="title-container">
                <p className="id">{item.id}</p>
                <p className="field1">{item.name}</p>
              </div>
              <div className="description-container">
                  <p className="field2"><span>Products:</span> {item.ingredients}</p>
                  <p className="field3"><span>Recipe:</span> {item.instructions}</p>
                  <p className="field4"><span>Cooking time: </span>{item.cookingTime} minutes</p>
                  <p className="field5"><span>Published on: </span>{item.publicationDate.toString()}</p>  
                <button type='button' className='deleteButton' onClick={() => props.onRemoveRecipe(item)}>Delete</button>
              </div>
            </li>
        ))}
    </ul>
    )
}
export default RecipeList;