let largeImg = document.getElementById('largeImg');


function imgClicked(id){
    largeImg.src = document.getElementById(id).src;
    console.log(id.src);
}