let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

// ✅ Save User Profile
function saveUser(){
 let user = {
  name: document.getElementById("username").value,
  diet: document.getElementById("diet").value
 };
 localStorage.setItem("user", JSON.stringify(user));
 alert("Profile Saved");
}

// ✅ Add Recipe
function addRecipe(){
 let recipe = {
  name: document.getElementById("name").value,
  cuisine: document.getElementById("cuisine").value,
  ingredients: document.getElementById("ingredients").value,
  type: document.getElementById("type").value,
  rating: 0
 };

 // basic validation
 if(!recipe.name || !recipe.ingredients){
  alert("Please fill required fields!");
  return;
 }

 recipes.push(recipe);
 localStorage.setItem("recipes", JSON.stringify(recipes));
 display(recipes);

 // clear inputs
 document.getElementById("name").value = "";
 document.getElementById("cuisine").value = "";
 document.getElementById("ingredients").value = "";
}

// ✅ Display Recipes
function display(data){
 let div = document.getElementById("recipes");
 div.innerHTML = "";

 if(data.length === 0){
  div.innerHTML = "<p>No recipes found</p>";
  return;
 }

 data.forEach((r,i)=>{
  div.innerHTML += `
  <div class="recipe">
   <h3>${r.name}</h3>
   <p><b>Cuisine:</b> ${r.cuisine || "Not specified"}</p>
   <p><b>Meal:</b> ${r.type}</p>
   <p><b>Ingredients:</b> ${r.ingredients}</p>
   <p>⭐ ${r.rating}</p>

   <button onclick="rate(${i})">Rate</button>
   <button onclick="deleteRecipe(${i})" style="background:red;margin-top:5px;">Delete</button>
  </div>`;
 });
}

// ✅ Search + Filter
function search(){
 let q = document.getElementById("search").value.toLowerCase();
 let f = document.getElementById("filter").value;

 let filtered = recipes.filter(r =>
  r.name.toLowerCase().includes(q) &&
  (f === "" || r.type === f)
 );

 display(filtered);
}

// ✅ Rate Recipe
function rate(index){
 recipes[index].rating++;
 localStorage.setItem("recipes", JSON.stringify(recipes));
 display(recipes);
}

// ✅ Delete Recipe
function deleteRecipe(index){
 if(confirm("Are you sure you want to delete this recipe?")){
  recipes.splice(index,1);
  localStorage.setItem("recipes", JSON.stringify(recipes));
  display(recipes);
 }
}

// ✅ Load on Start
display(recipes);
