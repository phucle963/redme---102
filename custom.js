
function likecokie() {
let reponse = prompt('Do you like Cake?')
                
if (reponse == 'yes') {
    alert("you're come to the right place!");
} else if (reponse == 'no') {
    alert("What are you doing at a shop website");
} else {
   arlert("i'm not sure what that means...");
}

document.write(reponse);
return reponse;
}


function rateMypage(){
    let rating = prompt("how many to start would you rate my page? (1-5)");
    for(i = 0; i < rating; i++){
    document.write('<img class="star" src="star.png" alt="star">')
    }
}