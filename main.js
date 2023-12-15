function main(){
    document.getElementById("Answer1").value = ' ';
    const a=document.getElementById('first-number').value;
    const a1=Number(a);
    const b=document.getElementById('second-number').value;
    const b1=Number(b);
    const c=document.getElementById('operator').value;
    if(a1 =='' || b1 =='' || c ==''){
        alert("Please enter the values")
    }
    switch(c){
        case '-':
            num = a1 - b1;
            break;
        case '+':
            num = a1 + b1;
            break;
        case '*':
            num = a1 * b1;
            break;
        case '/':
            num = a1/b1;
            break;
        default:
            alert('operator not found');
    }
    console.log(num);
    document.getElementById("Answer1").value = num;
}
function reset(){
    document.getElementById("Answer1").value = '';
    document.getElementById("first-number").value = '';
    document.getElementById("second-number").value = '';
    document.getElementById('operator').value='';
}
function cleardata(){
    document.getElementById("Answer1").value = '';
}