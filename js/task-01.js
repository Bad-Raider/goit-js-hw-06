// created link to #categories id
const numberOfCategoriesList = document.querySelector("#categories");
// create a function
function searchInfoTagElement(tag) {
    // show number of child
    console.log(`Number of categories: ${tag.children.length}`);
    // create link to tag ---> child 
    const arrtag = tag.children;

    for (let arr of arrtag) {
        // it`s <h2> tag
        console.log(`Category: ${arr.firstElementChild.textContent}`);
        //  It`s list of class = "item" 
        console.log(`Elements: ${arr.lastElementChild.children.length}`);
    }
}
searchInfoTagElement(numberOfCategoriesList);
