function checkClickedInputType() {
    const ty = document.activeElement.type;
    const tg = document.activeElement.tagName;
    const elId = document.activeElement.id;
    const e = new Event('keydown',{"bubbles":true, "cancelable":false});
    const f = new Event("change", {"bubbles":true, "cancelable":false});
    const g = new Event("focus", {"bubbles":true, "cancelable":false});
    const h = new Event("blur", {"bubbles":true, "cancelable":false});
    
    
    



   
    console.log(ty,tg);
    if( (tg === 'INPUT' && ty === 'text') || ((tg === 'INPUT' && ty === 'email'))){
    
        document.activeElement.click();
        document.activeElement.value = 'bailey.dust@gmail.com';
        document.activeElement.dispatchEvent(e);
        document.activeElement.dispatchEvent(f);
        document.activeElement.dispatchEvent(g);
        document.activeElement.dispatchEvent(h);
    }
        //     console.log(elId);
        //   //document get active element
        
        //     const againLogin = document.getElementById(elId);
            
        //     againLogin.value = 'dustin login'}

    else if(tg === 'INPUT' && ty === 'password'){
        
        document.activeElement.value = 'r';
        document.activeElement.dispatchEvent(e);
        document.activeElement.dispatchEvent(f);
        document.activeElement.dispatchEvent(g);
        document.activeElement.dispatchEvent(h);
    }
    

}

document.body.addEventListener('click',checkClickedInputType);