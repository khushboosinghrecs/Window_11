taskbar=document.getElementsByClassName('taskbar')[0]
startmenu=document.getElementsByClassName('startmenu')[0]
console.log(taskbar);
console.log(startmenu);
taskbar.addEventListener("click", ()=>{
    if(startmenu.style.bottom=='50px'){
        startmenu.style.bottom="-650px";
    }
    else{
        startmenu.style.bottom='50px';
    }
})