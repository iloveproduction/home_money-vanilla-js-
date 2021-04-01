import Transaction from './Transaction'
import {appInit} from './appInit'

function removeItem(){
    const trash = document.querySelectorAll('.trash');
    const transBoardBody = document.querySelector('.trans-board__body');

    for (let index= 0; index < trash.length; index++){
        trash[index].onclick = ()=>{
            console.log(index);
            Transaction.delete(index);
            transBoardBody.innerHTML = '';
            appInit();
            removeItem();
        }
    }
}

export {removeItem};