import React from 'react';
const Form = props => (
    <form onSubmit={props.getRecipe}>
        <input type="text" name="recipeName" />
        <button className="btn2"> Search </button>
    </form>
);
export default Form;
