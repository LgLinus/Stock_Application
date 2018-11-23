import React, {Component} from 'react';
import './RecipeContainer.scss';
import api from '../../api/api';
const axios = require('axios');

class RecipeContainer extends Component {
  state = {
    recipes: [],
  };

  async componentDidMount() {
    let recipes = await api.getFood();
    if (recipes) {
      this.setState({recipes});
    }
  }
  renderRecipes(recipes) {
    return recipes.map((recipe, index) => {
      let {title, instructions, ingredients, img} = recipe;
      return (
        <div className="recipe" key={index}>
          <h3 style={{textDecoration: 'underline', opacity: '0.8'}}>{title}</h3>
          <div className="list">
            <div className="instructions">
              <h3>Instructions</h3>
              <img src={img} alt={recipe + index} />
              <ul style={{opacity: '0.5'}}>
                {instructions &&
                  instructions.map((item, index) => {
                    return (
                      <li
                        key={'instructions' + index}
                        style={{marginBottom: '24px'}}>
                        {item}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="list">
              <div>
                <h3>Ingredients</h3>
                {ingredients &&
                  ingredients.map((item, index) => {
                    if (item.includes('[')) {
                      return (
                        <b key={'item_ing' + index}>
                          <p style={{opacity: '0.9'}}>
                            {item.replace(/[[\]]/g, '')}
                          </p>
                        </b>
                      );
                    }
                    return (
                      <div
                        key={'item_ing' + index}
                        style={{
                          borderBottom: '2 solid white',
                        }}>
                        <p
                          style={{
                            opacity: '0.5',
                          }}>
                          {' '}
                          {item}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="recipeMain">{this.renderRecipes(this.state.recipes)}</div>
    );
  }
}
export default RecipeContainer;
