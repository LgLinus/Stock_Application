import React, {Component} from 'react';
import './RecipeContainer.scss';

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
    title: 'Tacopaj arla, 6 pers',
    img:
      'https://cdn-rdb.arla.com/Files/arla-se/4287675424/64f6a3c3-a309-45ee-a1d1-3a15a980e181.jpg?mode=crop&w=1680&h=750&scale=both&ak=f525e733&hm=e6b63260',
    ingredients: [
      '150g svenskt smör',
      '3 dl vetemjöl',
      '3 tsk paprikapulver',
      '2 msk vatten',
      '[Fyllning:]',
      '500g nötfärs',
      '1 msk taco kryddmix',
      '1 msk svenskt smör',
      '1 dl vatten',
      '2 dl lätt creme fraiche paprika & chili',
      '2 dl lätt creme fraiche',
      '150g körsbärstomater',
      '1 dl green jalapeno',
      '1/2 dl riven ost texmex',
      '1 tsk paprikapulver',
      '[Till servering:]',
      '3dl gräddfil',
      'majschips eller tacochips',
    ],
    instructions: [
      'Sätt ugnen på 225 grader',
      'Hacka ihop smör, mjöl och paprikapulver till en grynig massa, för hand eller i matberedare. Tillsätt vatten och arbeta snabbt ihop till en smidig deg. ',
      'Tryck ut degen i en pajform eller ugnsfast form, ca 30 cm i diameter. Nagga degen med en gaffel och ställ formen i kyl ca 30 min. ',
      'Förgrädda pajskalet i mitten av ugnen ca 12 min. ',
      'Bryn köttfärsen i smör. Tillsätt tacokrydda och vatten, låt koka ca 5 min. ',
      'Blanda smaksatt crème fraiche med naturell crème fraiche i en skål. Halvera tomaterna och låt bitarna med chili rinna av. ',
      'Fyll pajskalet med färs och bred på crème fraiche blandningen. Täck med tomathalvor och chili, strö över ost och pudra till sist över paprikapulver. ',
      'Grädda pajen i mitten av ugnen ca 25 min, tills osten fått fin färg. Servera med gräddfil och tacochips.',
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
  renderRecipes() {
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
    return <div className="recipeMain">{this.renderRecipes(recipes)}</div>;
  }
}
export default RecipeContainer;
