function countWords(sentence) {
    const wordCount = [];
    let currentWord = '';
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence [i];
        if (char !== '')


    }
}


function updateInventory (inventory, newItems) {
newItems.forEach (item => {
    if (upadtedInventory[item]) {
        updatedInventory[item]++;
    } else {
        updatedInventory[item] = 1;
    }
});
return updatedInventory 
}





function groupPeopleByAge(people) {
    const groupedByAge = {};
    people.forEach(person => {
        const{name, age} = person;
        if (groupedByAge [age]) {
            groupedByAge[age].push(name)
        } else {
            groupedByAge[age] = [name];
        }
            
    });
    return groupedByAge;
}