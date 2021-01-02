window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('.navbar');
    if(window.pageYOffset>0){
        nav.classList.add("add-shadow");
    }else{
        nav.classList.remove("add-shadow");
    }
});

const navBarElement = document.querySelectorAll(".nav-link");

navBarElement.forEach(function(value,index){
    value.addEventListener("click",function(){
        if (document.querySelector('.navbar-nav a.active') !== null) {
            document.querySelector('.navbar-nav a.active').classList.remove('active');
          }
        value.classList.add("active");

        let allSection = document.querySelectorAll('section');

        for (let section of allSection){
            if(section.getAttribute('data-id')== value.getAttribute('data-id')){
                section.style.display = "block";
            }else {
                section.style.display = "none";
               }
        }
    })
})