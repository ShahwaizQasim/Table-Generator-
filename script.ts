// console.log('testing');

const myForm = document.querySelector('#form-table') as HTMLFormElement;
let myInp = document.querySelector('#table') as HTMLInputElement;
let tablePrint = document.querySelector('#table-print') as HTMLParagraphElement;

myForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log('click');
    let userInpValue = Number(myInp.value);
    if (!Number(userInpValue)) {
        alert("String not allow");
        myForm.reset();
    }else{
    tablePrint.innerHTML = '';
    for (let i = 1; i <= 12; i++) {
        console.log();
        tablePrint.innerHTML += `${userInpValue} X ${i} = ${userInpValue * i} <br/>`;
    }
    myForm.reset();
}
})
