import { Link } from "react-router-dom";

/**
 * 레시피 썸네일 컴포넌트
 * @param {recipe}
 * @returns
 */
const RecipePreview = ({ recipe }) => {
  const recipeId = recipe.recipe_id;
  const recipeDescription = recipe.description;
  const cuisineName = recipe.cuisine_name;

  return (
    <>
      <div className="w-[296px] h-[400px] px-4 pt-4">
        <Link to={`../recipe/${recipeId}`}>
          <div className="thumbnail h-[360px] rounded-2xl overflow-hidden bg-white/80 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] hover:-translate-y-1 duration-200 ease-in-out">
            <img
              className="w-full max-w-full h-3/4 object-cover contrast-120 brightness-95"
              src={`/img/${recipeId}.png`}
              alt={"recipeThumbnail"}
            />
            <div className="description p-3 text-xl text-black whitespace-nowrap overflow-hidden text-ellipsis">
              {recipeDescription}
            </div>
            <div className="cuisineName pr-3 text-right text-sm text-black">
              {cuisineName}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default RecipePreview;
