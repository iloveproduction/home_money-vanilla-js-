import {createItem} from './createItem'

const transBoardBody = document.querySelector('.trans-board__body')
export function allTransactionsRender(transactions){
    for (let i in transactions){
        createItem(i,transactions,transBoardBody,true)
    }
}
