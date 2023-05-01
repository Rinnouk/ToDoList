var taskarray = []
function pegar() {

    const texto = document.getElementById("entrada");
    //taskarray.push(texto.value);
    //console.log(taskarray);
    const listagot = document.querySelector("#lista");
    //listagot.innerHTML = ""
    //taskarray.forEach(element => {
        let li = document.createElement("li");
        li.innerHTML="<input type='checkbox'>"+ texto.value;
        
        
        listagot.appendChild(li)
        addlistener();
    //});
};
function checkifchecked(){
    const CheckBoxes = document.querySelectorAll('#lista input[type="checkbox"]');
    CheckBoxes.forEach(checkbox => {
        if (checkbox.checked == true){
            const itemcheckbox = checkbox.parentNode;
            itemcheckbox.classList.add("crossed");
        }
        else{
            const itemcheckbox = checkbox.parentNode;
            itemcheckbox.classList.remove("crossed");
        }
    });
}
            

function addlistener(){

    const CheckBoxes = document.querySelectorAll('#lista input[type="checkbox"]');
    
    CheckBoxes.forEach(checkbox => checkbox.addEventListener("click",checkifchecked))
}
