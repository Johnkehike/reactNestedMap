import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recip =>
      <div key={recip.id}>
      <h2>{recip.name}</h2>
      <ul>
      {recip.ingredients.map(recipe =>
        <li key={recipe}>
          {recipe}
          </li>
        )}
      </ul>
      </div>
      )}
    </div>
  );
}
