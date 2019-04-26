function checkClickedInputType() {
    var x = document.activeElement.type;
    var y = document.activeElement.tagName;
    var e = new KeyboardEvent('keydown',{'keyCode':32,'which':32});
   
    console.log(x,y);
    if( x === 'text'){
    document.activeElement.focus();
    document.activeElement.value = 'dustin login'}
    if(y === 'INPUT' && x === 'password'){
        document.activeElement.focus();
        document.activeElement.value = 'r';}
    

}

document.body.addEventListener('click',checkClickedInputType);