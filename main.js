const billInput = document.querySelector('.bill-input');
const nopInput = document.querySelector('.nop-input');
const tipArea = document.querySelector('.tipArea');
const totalArea = document.querySelector('.totalArea');
const custombtn = document.querySelector('.custom-btn');
const billerror = document.querySelector('.bill-error');
const noperror = document.querySelector('.nop-error');
const customInput = document.querySelector('custom-input');

function resetFields(){
    billInput.value = '';
    nopInput.value = '';
    tipArea.innerHTML = "&#36;0.00";
    totalArea.innerHTML = "&#36;0.00";
    noperror.innerHTML = '';
    billerror.innerHTML = '';
    billInput.classList.remove('error');
    nopInput.classList.remove('error');
}


function Tip(tip_value){
    if(billInput.value === ''){
        billInput.classList.add('error');
        billerror.innerHTML = '';
    }else if(billInput.value == 0){
        billerror.innerHTML = 'Can`t be zero';
        billInput.classList.add('error');
    }

    if(nopInput.value === ''){
        nopInput.classList.add('error');
        noperror.innerHTML = '';
    }else if(nopInput.value == 0){
        noperror.innerHTML = 'Can`t be zero';
        nopInput.classList.add('error');
    }

    if(billInput.value > 0){
        billInput.classList.remove('error');
        billerror.innerHTML = '';
    }

    if(nopInput.value > 0){
        nopInput.classList.remove('error');
        noperror.innerHTML = '';
    }

    if(tip_value === 5 || tip_value === 10 || tip_value === 15 || tip_value === 25 || tip_value === 50){
        let bill = parseInt(billInput.value,10);
        let nop = parseInt(nopInput.value,10);

        let billResult = bill / nop;
        let tipResult = bill * (tip_value / 100);

        totalArea.innerHTML = "&#36;"+`${billResult}`;
        tipArea.innerHTML = "&#36;" + `${tipResult}`;
    }
}

// This function changes the custom tip button to an input element and applies the entered tip when clicked,
// also applies a class.
function customTip(){
    let inputBox = document.createElement('input');
    custombtn.parentNode.replaceChild(inputBox,custombtn);
    inputBox.classList.add('custom-input');
    
    inputBox.addEventListener('click', function(e){
        e.preventDefault();
            let bill = parseInt(billInput.value,10);
            let nop = parseInt(nopInput.value,10);
            let ownTip = parseInt(inputBox.value,10);

            let billResult = bill / nop;
            let tipResult = bill * (ownTip / 100);

            totalArea.innerHTML = "&#36;"+`${billResult}`;
            tipArea.innerHTML = "&#36;" + `${tipResult}`;
    }); 
}