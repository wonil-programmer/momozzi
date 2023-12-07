/**
 * 냉장고 내 저장된 단일 재료 컴포넌트
 * @param {ingredient}
 * @returns
 */
const StoredIngredient = ({ ingredient }) => {
  return (
    <div className="text-lg my-2 flex flex-row text-[#111111]">
      <span className="ingredientType">{ingredient.type}</span>
      <span className="ingredientName text-left">
        {ingredient.ingredient_name}
      </span>
      <span className="ingredientName">{ingredient.calories}</span>
    </div>
  );
};

export default StoredIngredient;
