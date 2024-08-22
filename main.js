//declaration of variables 

const button = document.getElementById('createnotes')
const deleteIcon = document.getElementById("delete")
const save = document.getElementById("save")


//todo: on click of the createnotes button make the p tag block 
button.addEventListener("click", function(){
    const ptag = document.getElementById("ptag")
    ptag.style.display = "block"
    console.log('done');
    
})

//todo: add functionality to the delete icon which will be applied throughout the document
deleteIcon.addEventListener("click", function(e){
    
    e.target.parentElement.style.display = "none"
    
})

//todo: adding the save functionality which creates an li and appends to the ul 
save.addEventListener("click", function(e){
    console.log(e)
    console.log(e.target.parentElement.innerText)
    createLi(e.target.parentElement.innerText)
    
})

function createLi (text){
    //creating li to be appended to ul
    const newLi = document.createElement('li')
    newLi.className = "relative outline-none block h-[150px] rounded-2xl p-3 bg-white my-4"
    
    newLi.textContent = text

    //creating the deleteIcon
    const LiDeleteIcon = document.createElement("img")
    LiDeleteIcon.src = "assets/delete.png"
    LiDeleteIcon.className = "lideleteicon size-6 absolute bottom-0 right-0 m-2 "
    LiDeleteIcon.id = "lideleteicon"

    //append
    newLi.appendChild(LiDeleteIcon)
    const ul = document.getElementById('ul')
    //console.log(ul);
    
    ul.appendChild(newLi)

    //console.log("herer");

    ul.addEventListener("click", function(e){
        // console.log(e);
        // console.log(e.target);

        if(e.target.tagName == "IMG"){
            e.target.parentElement.remove()
        }
        
        
    })



    
    //delete button function inside li
    
}

//adding functionality to the delete button on li




