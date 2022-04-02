

let arr=JSON.parse(localStorage.getItem("Students_Details"))||[];

function Details() {
    function details() {
        this.name = document.getElementById("name").value;
        this.number = document.getElementById("number").value;
        this.city = document.getElementById("city").value;
    }
    let show = new details();
    arr.push(show);
    localStorage.setItem("Students_Details",JSON.stringify(arr));
    console.log(show);
    console.log(arr);
}   

function Show()
{
    window.location.href = "display.html";
}
