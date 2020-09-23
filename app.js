const entireSection = document.querySelectorAll('.second-section-div')
const ingredientsEdit = document.getElementsByClassName('ingre')
const introText = document.querySelector('.intro-text');

const openForm = document.querySelector('.add-recipe');
const secondSec = document.querySelector('.second-section')
const formSection = document.querySelector('.form-guy')
const inputFields = document.querySelectorAll('input')
const submitRecipe = document.querySelector('.submit-recipe')
const closeForm = document.querySelector('.close-form');
const backDrop = document.querySelector('.backdrop')


let titleValue = inputFields[0].value;
let ingriValue = inputFields[1].value;
let instrucValue = inputFields[2].value;
let imgUrl = inputFields[3].value;
const RecipeList = []

// Show the recipie form and validate user input
function recipeHandler(e) {
    e.preventDefault()

    titleValue = inputFields[0].value.trim();
    ingriValue = inputFields[1].value.trim();
    instrucValue = inputFields[2].value.trim();
    imgUrl = inputFields[3].value.trim();

    if (titleValue == '' || ingriValue == '' || instrucValue == '') {
        alert('Input fields can\'t be empty')
        return;
    }
    
    const recipeManager = {
        title: titleValue,
        ingri: ingriValue,
        instruc: instrucValue,
        image: imgUrl,
        id : Math.random()
    }

    RecipeList.push(recipeManager);
    console.log(RecipeList, recipeManager.title);
    appendRecipe(recipeManager.title, recipeManager.ingri, recipeManager.instruc, recipeManager.image,recipeManager.id)
    clearInput()
    toggleIntroText();
    
}

//open and close the form
openForm.addEventListener('click', () => {
    formSection.style.display = 'block'
})
closeForm.addEventListener('click', () => {
    formSection.style.display = 'none'
})


// create and append the user input
function appendRecipe(title, ingri, instruc, image, id) {
    const newElem = document.createElement('section')
    newElem.className = 'second-section-div';
    newElem.innerHTML = `
     <div class="image-div">
             <img src="${image}" alt="no image">
                </div>
                <h3>${title}</h3>
                <button class="btn btn-secondary btn-1">Open Recipe</button>
                    <section class="section-1">
                    <div class ="section-1-header">
                    <h2>${title}</h2>
                    <img class="close" src="icon-close.svg">
                    </div>
                    <div class="section-body">
                      <div>
                      <h5> Ingridients:</h5>
                      <p>${ingri}</p>
                       </div>
                       <img src="${image}" alt="no image">
                       </div>
                       <h5 class="section-1-instruct">Instructions :</h5>
                    <p class="ingre">${instruc}</p>    
                    <button class="remove-section">Delete</button>
                    <button 3 class="Edit">Edit</button>
              </section>
   `
    secondSec.append(newElem);

    const button1 = document.querySelectorAll('.btn-1');
     const recipeSection = document.querySelectorAll('.section-1')
    const deleteButton = document.querySelectorAll('.remove-section');
    const EditButton = document.querySelectorAll('.Edit')
     

     //  added event listeners to the buttons to delete, edit and show created recipe
    console.log(recipeSection)
    for (let butt of button1) {
        console.log(butt)
        butt.addEventListener('click', event =>{
    butt.nextElementSibling.style.display = 'block'
    backDrop.style.display = 'block'
        })
    }
    for(let del of deleteButton){
      del.addEventListener('click', ()=>{
          del.parentElement.parentElement.style.display = 'none'
          backDrop.style.display = 'none'
      })
    }

    for(let edit of EditButton){
        edit.addEventListener('click', ()=>{
       let paper =  edit.parentElement.getElementsByTagName('p')
       for(let p of paper){
          p.contentEditable = 'true'
       }
        })
    }
 
  
    const closeIcon = document.querySelectorAll('.close');
   for(close of closeIcon){
       close.addEventListener('click', () =>{
         var i;
         for(i = 0; i < recipeSection.length; i++){
             recipeSection[i].contentEditable = 'false'
          recipeSection[i].style.display = 'none'
          backDrop.style.display = 'none'
         }
       })
   }
}

// clear form upon submission
function clearInput() {
    inputFields[0].value = '';
    inputFields[1].value = '';
    inputFields[2].value = '';
    inputFields[3].value = ''
}

// close the opening text
function toggleIntroText(){
    introText.style.display = 'none'
}


submitRecipe.addEventListener('click', recipeHandler)





       


        
