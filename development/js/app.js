let btnGetName = document.querySelector("button");
let inputName = document.querySelector("input");
let userDisplay = document.querySelector(".userName");
let welcomePage = document.querySelector(".welcome");
let pulpitPage = document.querySelector(".pulpitTop");
let weekendDiv = document.querySelector(".weekendDiv")

// localStorage.clear();

btnGetName.addEventListener('click', function () {
    userDisplay.innerHTML = inputName.value;
    localStorage.setItem('userName', inputName.value);
    welcomePage.style.visibility = "hidden";
    pulpitPage.style.display = "flex";
    weekendDiv.style.visibility = "visible";
});

if (localStorage.getItem('userName') != null) {
    userDisplay.innerHTML = localStorage.getItem('userName');
    welcomePage.style.visibility = "hidden";
} else {
    pulpitPage.style.display = "none";
    weekendDiv.style.visibility = "hidden";
}
// localStorage.removeItem('userName');

//MODAL
var modal = document.getElementById("myModal");
var btn = document.querySelector(".addRecipe"); // button dodaj przepis
var saveClose = document.getElementById("closeSave"); // przycisk zapisz i zamknij

btn.onclick = function () {
    modal.style.display = "block";
}

// saveClose.onclick = function() {
//   modal.style.display = "none";
// }

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// logika 
var getRecipeName = document.getElementById("getRecipeName"); // input nazwy przepisu
var getRecipeDescription = document.getElementById("getRecipeDescription"); // opis przepisu
var getRecipeInstruction = document.getElementById("getRecipeInstruction"); // text area instrukcji
var newInstructionButton = document.getElementById("newInstructionButton"); // znak + instrukcji

var instructionListLi = document.getElementById("instructionList"); // lista instrukcji (<ol>)
var getRecipeIngredients = document.getElementById("getRecipeIngredients"); //input skladnikow
var newIgredientButton = document.getElementById("newIgredientButton"); // znak + składników
var ingredientListLi = document.getElementById("ingredientList"); // lista składników (<ul>)


saveClose.onclick = function () {
    newRecipe.id += 1;
    newRecipe.title = getRecipeName.value;
    newRecipe.description = getRecipeDescription.value;
    saveToLocalStorage(newRecipe);
    console.log(newRecipe);
    modal.style.display = "none";
    allLiClear();
    allInputClear();
}

var newRecipe = {
    id: 0, // id przepisu
    title: "", // nazwa przepisu
    description: "", // opis przepisu
    instructions: [], //instrukcje przepisu
    ingredients: [] //składniki przepisu
};

// localStorage.setItem("recipes",getRecipeName.value);

// saveClose.addEventListener('click', function(){
//     newRecipe.id += 1;
//     newRecipe.title = getRecipeName.value;
//     saveToLocalStorage(newRecipe);
//     console.log(newRecipe);
//     modal.style.display = "none";
// });

function allLiClear() {
    instructionListLi.innerText = "";
    ingredientListLi.innerText = "";
}

function allInputClear() {
    getRecipeName.value = "";
    getRecipeDescription.value = "";
    getRecipeInstruction.value = "";
    getRecipeIngredients.value = "";
}

function saveToLocalStorage(element) {
    var dataFromLocalStorage = [];
    if (localStorage.getItem('recipes') != null) {
        dataFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));
        dataFromLocalStorage.push(element);
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
    } else {
        dataFromLocalStorage.push(element);
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
    }
}

function renderSingleInstruction(instruction) {
    // tworzymy nowy element LI i dodajemy go do HTML
    var newLi = document.createElement("li");
    newLi.innerHTML = `${instruction} <i class="fa fa-edit"></i>
  <i class="far fa-trash-alt"></i>`;
    instructionListLi.appendChild(newLi);
}

function renderSingleIngredient(ingredient) {
    // tworzymy nowy element LI i dodajemy go do HTML
    var newLi = document.createElement("li");
    newLi.innerHTML = `${ingredient} <i class="fa fa-edit"></i>
  <i class="far fa-trash-alt"></i>`;
    ingredientListLi.appendChild(newLi);
}

newInstructionButton.addEventListener('click', function (e) {
    e.preventDefault();
    // dodajemy instrukcje do local storage i wyswietlana jest w HTML
    newRecipe.instructions.push(getRecipeInstruction.value);
    renderSingleInstruction(getRecipeInstruction.value);
    getRecipeInstruction.value = "";
});

newIgredientButton.addEventListener('click', function (e) {
    e.preventDefault();
    // dodajemy skladnik do local storage i wyswietlany jest w HTML
    newRecipe.ingredients.push(getRecipeIngredients.value);
    renderSingleIngredient(getRecipeIngredients.value);
    getRecipeIngredients.value = "";
});

// wyswietlanie planow

function renderAllRecipes() {

}
