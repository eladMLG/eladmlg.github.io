
var hi = document.getElementsByName("hi")

function test() {
    for(var i = 0; i < hi.length; i++){
        hi[i].innerHTML = "hi<br>"
    }
}