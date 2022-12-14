let slideShow = document.querySelector(".slide-show");
let nextNode = document.querySelector("#next");
let projectName = document.querySelector(".project-name");

var arrayProject = [
    "Project 1 - Membuat web lms",
    "Project 2 - Membangun toko online suka maju",
    "Project 3 - Membahas rancangan pembuatan aplikasi",
    "Project 4 - Melakukan presentasi di kelas"
];
var arrayLink = [
    "https://images.unsplash.com/photo-1502951682449-e5b93545d46e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
    "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1532&q=80"
];

let counter = 0;

function nextSlide(){
    counter++;
    if(counter === 4){
        counter = 0;
    }
    slideShow.setAttribute("src", arrayLink[counter]);
    projectName.innerHTML = arrayProject[counter];
}

setInterval(nextSlide,3000);
