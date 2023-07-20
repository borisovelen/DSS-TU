import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Recipe, detailsProps } from "./interfaces";

function RecipeDetails(props: detailsProps){

    
    const [selectedRecipe, setSelectedRecipe] = useState(props.emptyRecipe);

    useEffect(() => {
        if (props.selectedRecipe.id!=-1) {
            setSelectedRecipe(props.selectedRecipe);
        } else{
            setSelectedRecipe(props.emptyRecipe);
        }
    },[props.selectedRecipe])


    function handleInputChange(e: ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target;
        setSelectedRecipe(recipes => ({...recipes, [name]:value}));
    }
    function handleDateChange(e: ChangeEvent<HTMLInputElement>){
        const {value} = e.target;
        setSelectedRecipe(recipeList => ({...recipeList, publicationDate: new Date(value)}));
    }
    function handleSubmit(e: FormEvent){
        e.preventDefault();
        if(selectedRecipe.id==-1){
            props.onSave(selectedRecipe);
            setSelectedRecipe(props.emptyRecipe);
        } else {
            props.onUpdate(selectedRecipe);
        }
    }

    return(
        <>
            <p>Content details</p>
            <form onSubmit={handleSubmit}>
            <label htmlFor='field1'>Name:</label><br />
            <input type='text' id='field1' name='name' value={selectedRecipe.name} onChange={handleInputChange} required></input><br />
            <label htmlFor='field2'>Ingredients:</label><br />
            <input type='text' id='field2' name='ingredients' value={selectedRecipe.ingredients} onChange={handleInputChange} required></input><br />
            <label htmlFor='field3'>Instructions: </label><br />
            <input type='text' id='field3' name='instructions' value={selectedRecipe.instructions} onChange={handleInputChange} required></input><br/>
            <label htmlFor='field4'>Cooking Time (minutes):</label><br/>
            <input type='number' id='field4' name='cookingTime' value={selectedRecipe.cookingTime} onChange={handleInputChange} required></input><br/>
            <label htmlFor='field5'>Publication Date:</label><br/>
            <input type='date' id='field5' name='publicationDate' value={selectedRecipe.publicationDate.toISOString().substring(0,10)} onChange={handleDateChange} required></input><br/>
            <button type='submit' id='saveButton'>Save</button>
            <button type='button' id='clearButton' onClick={props.clearForm}>Clear</button>
            </form>
        </>
    );
}

export default RecipeDetails;