const recipeApiUrl = "http://localhost:1337/api/recipes/?populate=*";
const dropDown = document.querySelector("#dropDown");
const ingredientList = document.querySelector(".ingredient-list");
const instructionList = document.querySelector(".instruction-list");

async function fetchRecipes() {
  try {
    const recipesResponse = await fetch(recipeApiUrl);
    const recipesData = await recipesResponse.json();
    return recipesData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function displayData() {
  const recipes = await fetchRecipes();
  const recipeData = recipes.data.map((recipe) => ({
    id: recipe.id,
    name: recipe.attributes.name,
    instructions: recipe.attributes.instructions,
    description: recipe.attributes.description,
    ingredients: recipe.attributes.ingredients.data.map(
      (ingredient) => ingredient.attributes.name
    ),
  }));

  console.log(recipeData);
  recipeData.forEach((recipe) => {
    const recipeLink = document.createElement("a");
    recipeLink.textContent = recipe.name;
    dropDown.appendChild(recipeLink);

    recipeLink.setAttribute("data-id", recipe.id);
    recipeLink.addEventListener("click", function () {
      console.log(recipe.id);

      ingredientList.innerHTML = "";
      instructionList.innerHTML = "";

      recipe.ingredients.forEach((ingredient) => {
        const recipeIngredient = document.createElement("li");
        recipeIngredient.textContent = ingredient;
        ingredientList.appendChild(recipeIngredient);
      });

      const recipeInstruction = document.createElement("p");
      recipeInstruction.textContent = recipe.instructions;
      instructionList.appendChild(recipeInstruction);
    });
  });
}

displayData();

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("dropDown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

/*
function showDropDown(){
    document.querySelector("#dropDown").classList.toggle("show");
}
*/
