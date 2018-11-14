import React, {Component} from 'react';
import './RecipeContainer.css';
const recipes = [
  {
    title: 'Spaghetti & Köttfärsås',
    img: 'https://img.koket.se/recipelist/spaghetti-med-kottfarssas.jpg',
    ingredients: [
      '500g köttfärs',
      '1 gul lök(skalad och hackad)',
      '2 vitlöksklyftor(skalade och finhackade',
      '2 morötter(skalade och finhackade)',
      '2 mtsk matolja',
      '1/2 dl tomatpuré',
      '500g krossade tomater',
      '2dl hönsbuljong',
      '2 msk kinesisk soja',
      'salt och svartpeppar',
      '4 portioner och spaghetti',
    ],
    instructions: [
      'Bryn köttfärsen och grönsakerna i oljan, tillsätt tomatpuré och bryn med den ett tag.',
      'Tillsätt krossade tomater, hönsbuljong och soja, koka sakta 15 minuter, smaksätt med salt och peppar.',
      'Koka spagetti enligt anvisningen på förpackningen.',
      'Till servering: Servera med riven parmesanost och körsbärstomater.',
    ],
  },
  {
    title: 'Spaghetti & Köttfärsås',
    img: 'n/a',
    ingredients: [
      '500g köttfärs',
      '1 gul lök(skalad och hackad)',
      '2 vitlöksklyftor(skalade och finhackade',
      '2 morötter(skalade och finhackade)',
      '2 mtsk matolja',
      '1/2 dl tomatpuré',
      '500g krossade tomater',
      '2dl hönsbuljong',
      '2 msk kinesisk soja',
      'salt och svartpeppar',
      '4 portioner och spaghetti',
    ],
  },
  {
    title: 'Spaghetti & Köttfärsås',
    img: 'n/a',
    ingredients: [
      '500g köttfärs',
      '1 gul lök(skalad och hackad)',
      '2 vitlöksklyftor(skalade och finhackade',
      '2 morötter(skalade och finhackade)',
      '2 mtsk matolja',
      '1/2 dl tomatpuré',
      '500g krossade tomater',
      '2dl hönsbuljong',
      '2 msk kinesisk soja',
      'salt och svartpeppar',
      '4 portioner och spaghetti',
    ],
  },
  {
    title: 'Spaghetti & Köttfärsås',
    img: 'n/a',
    ingredients: [
      '500g köttfärs',
      '1 gul lök(skalad och hackad)',
      '2 vitlöksklyftor(skalade och finhackade',
      '2 morötter(skalade och finhackade)',
      '2 mtsk matolja',
      '1/2 dl tomatpuré',
      '500g krossade tomater',
      '2dl hönsbuljong',
      '2 msk kinesisk soja',
      'salt och svartpeppar',
      '4 portioner och spaghetti',
    ],
  },
  {
    title: 'Spaghetti & Köttfärsås',
    img: 'n/a',
    ingredients: [
      '500g köttfärs',
      '1 gul lök(skalad och hackad)',
      '2 vitlöksklyftor(skalade och finhackade',
      '2 morötter(skalade och finhackade)',
      '2 mtsk matolja',
      '1/2 dl tomatpuré',
      '500g krossade tomater',
      '2dl hönsbuljong',
      '2 msk kinesisk soja',
      'salt och svartpeppar',
      '4 portioner och spaghetti',
    ],
  },
];
class RecipeContainer extends Component {
  constructor(props) {
    super(props);
  }

  renderRecipes() {
    return recipes.map(recipe => {
      let {title, instructions, ingredients, img} = recipe;
      return (
        <div className="recipe">
          <h3>{title}</h3>
          <ul>
            {instructions &&
              instructions.map(item => {
                return <li>{item}</li>;
              })}
          </ul>
          <img src={img} />
        </div>
      );
    });
  }

  render() {
    return <div className="recipeMain">{this.renderRecipes(recipes)}</div>;
  }
}
export default RecipeContainer;
