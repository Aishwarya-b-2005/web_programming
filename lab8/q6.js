function calc(){
    adult = parseInt(document.getElementById('adult').value);
    children = parseInt(document.getElementById('child').value);
    total = adult*10 + children*5;
    document.getElementById('total').value = total;
}