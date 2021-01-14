/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "black"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const profileImg = document.querySelector("#profile img")
profileImg.src = traveler.photo
profileImg.alt = traveler.name

const profileH2 = document.querySelector("#profile h2")
profileH2.textContent = traveler.name

const profileEm = document.querySelector("#profile em")
profileEm.textContent = traveler.nickname

const likes = document.querySelector("#profile .likes")
likes.textContent = `${traveler.likes} Likes`


/***** Deliverable 4 *****/
function renderAnimalSightingPost (animalObject) {
    const li = document.createElement("li")
    li.dataset.id = animalObject.id

    const p = document.createElement("p")
    p.textContent = animalObject.description

    const img = document.createElement("img")
    img.src = animalObject.photo
    img.alt = animalObject.species

    const a = document.createElement("a")
    a.href = animalObject.link
    a.target = "_blank"
    a.textContent = `Here's a video about the ${animalObject.species} species!`

    li.append(p, img, a)

    const animalsUl = document.querySelector("#animals")
    animalsUl.append(li)
}

traveler.animalSightings.forEach(function (animalSightinObject) {
    renderAnimalSightingPost(animalSightinObject)
})

/***** Deliverable 5 *****/
const animalToRemove = document.querySelector("[data-id='3'")
animalToRemove.remove()

/***** End of Starter Code *****/
/************************** EVENTS JS MINI CHALLENGE ******************************/

/***** Deliverable 1 *****/
// function toggleColor(element) {

//     if (element.style.color === "green") {
//         element.style.color = "black"
//     } else {
//         element.style.color = "green"
//     }
// }


function toggleColor(element) {
  
    if (element.style.color === "black") {
        element.style.color = "red"
    } else {
        element.style.color = "black"
    }
}

header.addEventListener("click", function () {

    toggleColor(header)
}
);


// header.addEventListener("click", toggleColor(header));

//why doesn't line 88 work like this: 
// header.addEventListener("click", toggleColor);

/***** Deliverable 2 *****/

function addLike (){
    
    likeCount.textContent = `${traveler.likes++} Likes`;
}

let likeBtn = document.querySelector(".like-button");

let likeCount = document.querySelector(".likes")


likeBtn.addEventListener("click", function () {
    
    addLike()
    
});

/***** Deliverable 3 *****/


// const animalForm = document.querySelector('#new-animal-sighting-form')

// animalForm.addEventListener('submit', function(event) {

//     event.preventDefault()

//     // access user input
//     const speciesInput = animalForm.species.value
//     const videoInput = animalForm.link.value
//     const photoInput = animalForm.photo.value
//     const descInput = animalForm.description.value

//     // use input to structure new post
//     const newPost = {
//         species: speciesInput,
//         link: videoInput,
//         photo: photoInput,
//         description: descInput
//     }

//     // render new animal sighting to page using newPost with user input
//     renderAnimalSightingPost(newPost)

//     // reset input fields in form
//     event.target.reset()
// });







// when listening for an event when wanting submit a form, make sure to listen
// on the whole form element 

//1. which html element are you listening to for an event 
//2. what kind of an event are we listening for (click, submit, keydown)
//3. when we hear an event, what action do we want to do 

const animalForm = document.querySelector('#new-animal-sighting-form')

animalForm.addEventListener("submit", function (event) {
    
    event.preventDefault()

    const inputSpecies = animalForm.species.value
    const inputVideoLink = animalForm.link.value
    const inputPhotoLink = animalForm.photo.value
    const inputDescription = animalForm.description.value


    newSighting(inputSpecies, inputVideoLink, inputPhotoLink, inputDescription);

    const sightingPost = { 
        species: inputSpecies, 
        photo: inputPhotoLink, 
        link: inputVideoLink, 
        description: inputDescription
    }

    renderAnimalSightingPost(sightingPost);

    event.target.reset()

});

// function newSighting(inputSpecies, inputVideoLink, inputPhotoLink, inputDescription){
//    const sightingPost = {dataid: animalObject.id++, travelerId: traveler.id, species: inputSpecies, photo: inputPhotoLink, link: inputVideoLink, description: inputDescription}
// //    sightingObject.append(sightingPost) 
//    renderAnimalSightingPost(sightingPost);

// }