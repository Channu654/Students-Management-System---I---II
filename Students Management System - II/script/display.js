
var data = JSON.parse(localStorage.getItem("Students_Details"));
console.log("data1", data)
document.querySelector('tbody').textContent="";

data.map(function(ele){
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.textContent = ele.name;

    var td2 = document.createElement("td");
    td2.textContent = ele.number;

    var td3 = document.createElement("td");
    td3.textContent = ele.city;

    tr.append(td1,td2,td3);

    document.querySelector('tbody').append(tr);
})