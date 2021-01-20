import {allTransactionsRender} from './allTransactionsRender'
const transBoardBody = document.querySelector('.trans-board__body')

export function removeItem(transactions){
    const trash = document.querySelectorAll('.trash')
    for (let index = 0; index < trash.length; index++){
        trash[index].onclick=()=>{
            console.log(index)
            transactions.splice(index,1)
            localStorage.setItem("Transactions", JSON.stringify(transactions))
            transBoardBody.innerHTML=''
            allTransactionsRender(transactions)
            removeItem(transactions)
        }
    }
}