import React from 'react';
import { Link } from "react-router-dom";

// Api key here 
var API_KEY = "df2f3c8225c4f5c4daf847e08dd0f1d7";

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  }
  //  Url Api call element here
  componentDidMount = async () => {
    var title = this.props.location.state.recipe;
    var req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    
    var res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
    console.log(this.state.activeRecipe);
  }
  render() {
    var recipe = this.state.activeRecipe;
    return (
      // enternal recipe container here
      <div className="container">
        { this.state.activeRecipe.length !== 0 &&
          <div className="active-recipe">
            <img className="active-recipe__img" src={ recipe.image_url } alt={recipe.title}/>
            <h3 className="active-recipe__title">{ recipe.title }</h3>
            <h4 className="active-recipe__publisher">
            Publisher: <span>{ recipe.publisher }</span>
            </h4>
            <p className="active-recipe__website"> Restaurant Website: 
            <span><a href={ recipe.publisher_url }>{ recipe.publisher_url }</a></span>
            </p>
            <button className="active-recipe__button">
            <Link to="/">Back</Link>
            </button>
          </div>
        }
      </div>
    );
  }
};

export default Recipe;