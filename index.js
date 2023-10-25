const ingredientApiUrl = 'http://localhost:1337/api/ingredients';
const recipeApiUrl = 'http://localhost:1337/api/recipes';





function filterFunction(){
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