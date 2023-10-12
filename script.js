function update(value){
    document.getElementById("screen").value += value;
}
function result(value){
    let ans = eval(document.getElementById("screen").value);
    document.getElementById("screen").value = ans;
}
function reset(value){
    document.getElementById("screen").value = "";
}