import { Link } from "react-router-dom";

export function Home() {
  return (
    <div id="container">
      <h1>My favorites</h1>
      <h1>My latest recipe additions</h1>
      
      <Link to="/browse">Browse Recipes</Link>
      <p></p>
      <Link to="/about">About</Link>
      <p></p>
      <Link to={`/recipe-example`}>Recipe Example 1</Link>
      <p></p>
      <Link to={`/recipe-example2`}>Recipe Example 2</Link>
      <p></p>
      <Link to={`/recipes/Korean_Fried_Yellow_Croaker`}>Real fish recipe page (temporary)</Link>
    </div>
  );
}

export default Home;