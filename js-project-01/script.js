var istatus = document.querySelector('h4');
var btn = document.querySelector('.btn');
var check = 1
btn.addEventListener('click', function(){
if(check == 1){
    istatus.innerHTML = "Friends"
    istatus.style.color="green";
    check=0;
    btn.innerHTML="Remove";

}
else{
    istatus.innerHTML = "Stranger"
    istatus.style.color="red";
    check=1;
    btn.innerHTML="Add Friend";

}

})