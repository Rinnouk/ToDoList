    //var taskarray = []
//Lista de demonstrações de tarefas que aparece como placeholder
const randomtask = ["Lavar a louça","Tirar o lixo", "Dar água para as plantas",
 "Secar os gelos", "Ler um livro","Plantar uma árvore", "Brincar com o cachorro", "Estudar programação", 
"Beber água", "organizar o desktop", "Assistir TV", "Pintar um quadro", "Atualizar a playlist"]

//Pega o texto de entrada, seleciona o ul (lista), cria um li, coloca um input(checkbox) e o texto no li
//Coloca o li no ul, executa a função para adicionar listener nos itens da lista e zera o campo de entrada
function pegar() {

    const texto = document.getElementById("entrada");
    //taskarray.push(texto.value);
    //console.log(taskarray);
    const listagot = document.querySelector("#lista");
    //listagot.innerHTML = ""
    //taskarray.forEach(element => {
        if(texto.value != ""){
        let li = document.createElement("li");
        li.innerHTML="<input type='checkbox'>" + texto.value;
    
        listagot.appendChild(li)
        addlistener();
        texto.value = ""
        }
};
    //});
//Pega e varre todos os li para ver os que estão marcados, os que estiverem entrarão para a classe com texto cortado
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
            
//Adiciona um trigger ao clicar em qualquer caixa
function addlistener(){

    const CheckBoxes = document.querySelectorAll('#lista input[type="checkbox"]');
    
    CheckBoxes.forEach(checkbox => checkbox.addEventListener("click",checkifchecked))
}
//Função apra o botão de limpar tarefas completas.
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
//Função para selecionar um placeholder random
function selectrandom(arr){
    const indice = Math.floor(Math.random()*arr.length)
    const item = arr[indice]
    return item

}
 

