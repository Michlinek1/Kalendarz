const content = document.getElementById("content")
const rok = document.getElementById("rok")
const miesiac = document.getElementById("miesiac")
const dzien = document.getElementById("dzien")
const miesiacDzien = document.getElementById("miesiacDzien")
const przycisk = document.getElementById("przyciskZmiana")
const data = new Date()
if(content.id === "content"){
    rok.innerHTML = data.getFullYear()
    miesiac.innerHTML = data.toLocaleString('pl-PL', { month: 'long' })
    miesiacDzien.innerHTML = data.toLocaleDateString('pl-PL', {weekday: 'long'})
    dzien.innerHTML = data.getDate()
    }
function dniWMiesiacu(miesiac,rok){
    const arr = []
    for(var i = 1; i <= new Date(rok, miesiac, 0).getDate(); i++){
        arr.push(i)
    }
    if(content.id === "DniWMiesiacu"){
        content.innerHTML = "<h1 id = 'dniMiesiac'>" + arr + "</h1>" 
    }else{
        return false;
    }
    
}
przycisk.onclick = function(){
    if(przycisk.className === "fa fa-angle-right"){
        przycisk.classList.remove("fa", "fa-angle-right")
        przycisk.classList.add("fa", "fa-angle-left")
        content.id = "DniWMiesiacu"
        dniWMiesiacu(data.getDate(),data.getFullYear());
    }else{
        przycisk.classList.remove("fa", "fa-angle-left")
        przycisk.classList.add("fa", "fa-angle-right")
        content.id = "content"
        content.innerHTML = 
        "<div id = 'rok'>" + data.getFullYear() + "</div>" + 
        "<div id = 'miesiac'>" + data.toLocaleString('pl-PL', { month: 'long' }) + "</div>" + 
        "<div id = 'miesiacDzien'>" + data.toLocaleDateString('pl-PL', {weekday: 'long'}) + "</div>" +
        "<div id = 'dzien'>" + data.getDate() + "</div>" 
        

    }
}

switch (data.toLocaleString('pl-PL', { month: 'long' })){
    case "wrzesień":
    case "październik":
    case "listopad":
        content.style.backgroundColor = "#FF8000"
        break
    case "grudzień":
    case "styczeń":
    case "luty":
        content.style.backgroundColor = "#0093AF"
        break
    case "marzec":
    case "kwiecień":
    case "maj":
        content.style.backgroundColor = "#32CD32"
        break
    case "czerwiec":
    case "lipiec":
    case "sierpień":
        content.style.backgroundColor = "#FF8000"
        break
}
