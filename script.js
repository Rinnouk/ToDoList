var taskarray = []
const randomtask = ["Lavar a louça","Tirar o lixo", "Dar água para as plantas",
 "Secar os gelos", "Ler um livro","Plantar uma árvore", "Brincar com o cachorro", "Estudar programação", 
"Beber água", "organizar o desktop", "Assistir TV", "Pintar um quadro", "Atualizar a playlist"]
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
        texto.value = ""
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

function cleanchecked(){
    const CheckBoxes = document.querySelectorAll('#lista input[type="checkbox"]');
    const lista = document.querySelector("#lista")
    CheckBoxes.forEach(checkbox => {
        if (checkbox.checked == true){
            const itemcheckbox = checkbox.parentNode;
            lista.removeChild(itemcheckbox)
        }
    })
}

function selectrandom(arr){
    const indice = Math.floor(Math.random()*arr.length)
    const item = arr[indice]
    return item

}
 

