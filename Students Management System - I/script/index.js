

let arr=JSON.parse(localStorage.getItem("Students_Details"))||[];

function Details() {
    function details() {
        this.name = document.getElementById("student_name").value;
        this.number = document.getElementById("student_number").value;
        this.city = document.getElementById("student_city").value;
    }
    let show = new details();
    console.log(show)
    arr.push(show);
    localStorage.setItem("Students_Details",JSON.stringify(arr));
    console.log(show);
    console.log(arr);
    
}   
