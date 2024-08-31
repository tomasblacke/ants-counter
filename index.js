//document.getElementById("count-el").innerText = 3
let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")
let count=0

function increment(){
    count++
    countEl.textContent=count

}
function save(){
    let historySaved= count + "-"
    saveEl.textContent += historySaved
    countEl.textContent=0 
    count=0
}
