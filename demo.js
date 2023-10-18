function result() {
    let pPoint=+document.getElementById("physics").value;
    let cPoint=+document.getElementById("chemistry").value;
    let bPoint=+document.getElementById("biology").value;
    let total=pPoint+cPoint+bPoint;
    let average=total/3;
    document.getElementById("result").innerHTML="Average: " +average+". Total: " +total;
}
function CtoFconvert() {
    let c=+document.getElementById("ctemp").value;
    let f=(c/5)*9+32
    document.getElementById("result2").innerHTML="F Temperature: "+f;
}
function circle() {
    let r=+document.getElementById("radius").value;
    const pi=3.14;
    let area=pi*r*r;
    let perimeter=2*pi*r;
    document.getElementById("result3").innerHTML="Area: "+area+". Perimeter: "+perimeter;
}