"use strict";
// console.log('testing');
const myForm = document.querySelector('#form-table');
let myInp = document.querySelector('#table');
let tablePrint = document.querySelector('#table-print');
myForm === null || myForm === void 0 ? void 0 : myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log('click');
    let userInpValue = Number(myInp.value);
    if (!Number(userInpValue)) {
        alert("String not allow");
        myForm.reset();
    }
    else {
        tablePrint.innerHTML = '';
        for (let i = 1; i <= 12; i++) {
            console.log();
            tablePrint.innerHTML += `${userInpValue} X ${i} = ${userInpValue * i} <br/>`;
        }
        // console.log(userInpValue);
        myForm.reset();
    }
});
