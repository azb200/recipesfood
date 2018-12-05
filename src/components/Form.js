
import React from 'react';
var Form = props => (

<div className="wrapper">
<form onSubmit={props.getRecipe} style={{ marginBottom: "2rem" }}>
    <input className="form__input" type="text" name="recipeName" placeholder="Search for recipes" />
    <button className="form__button">Search</button>
</form>
</div>
);

export default Form;