burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
navList=document.querySelector('.nav_list');
search=document.querySelector('.search');

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-height');     //Toggale is basically used here is which class is include it will remove that class and 
                                              //which class is not include it will inlude that class
    navList.classList.toggle('visibility');
    search.classList.toggle('visibility');

})