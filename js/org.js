var pop = document.getElementById('idpop');

var viewBtn = document.getElementsByClassName('org-view');

var closeBtn = document.getElementsByClassName('closeBtn')[0];


var i;
for(i = 0; i<viewBtn.length; i++){

    viewBtn[i].addEventListener('click', function (){
        pop.style.display = 'block';
        console.log(123)
});
}

closeBtn.addEventListener('click', function (){
    pop.style.display = 'none';
    // console.log(123)
});
