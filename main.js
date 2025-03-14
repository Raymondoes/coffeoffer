let accept = document.getElementById(`yes`);
let decline = document.getElementById(`no`);

accept.onclick = function(){
    document.getElementById(`coffee`).innerHTML = `Alright! here's your coffee!`;
}
decline.onclick = function(){
    document.getElementById(`coffee`).innerHTML = `Awh :(, Maybe next time!`;
}