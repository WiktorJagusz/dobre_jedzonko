var newSchedule = {
    week: 0, // id przepisu
    title: "", // nazwa przepisu
    description: "", // opis przepisu
    chooseRecipe: newRecipe.title.value,
};

saveClose.onclick = function () {
    newSchedule.week += 1;
    newSchedule.title = getRecipeName.value;
    newSchedule.description = getRecipeDescription.value;
    saveToLocalStorage(newSchedule);
    console.log(newSchedule);
    modal.style.display = "none";
    allLiClear();
    allInputClear();
};


var getScheduleName = document.getElementById("getScheduleName"); // input nazwy przepisu
var getScheduleDescription = document.getElementById("getScheduleDescription"); // opis przepisu
var getWeek = document.getElementById("getWeek"); // numer tygodnia