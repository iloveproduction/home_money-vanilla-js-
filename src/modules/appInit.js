import {lastFiveListRender} from './lastFiveListRender'
import {allTransactionsRender} from './allTransactionsRender'
import {analitics} from './analitics'
import {clearList} from './clearList'
import Transaction from './Transaction'

export function appInit(){
    const transactions = JSON.parse(localStorage.getItem("Transactions"));
    const transList = document.querySelector('.transactions__list');
    const money = document.querySelector('.balance__money');
    const lastFiveBody = document.querySelector('.transactions__list');
    const transBoardBody = document.querySelector('.trans-board__body');
    
    if (transactions === null || transactions.length == 0){
        localStorage.setItem('Transactions',JSON.stringify([]));
        localStorage.setItem('Cards',JSON.stringify([{
            name:'Рокетбанк',
            paySystem:'mastercard'
        },
        {
            name:'Альфабанк',
            paySystem:'visa'
        }]));
        console.log('No transactions');
        transList.innerHTML = '<div>No transactions yet...</div>';
    }else{
        clearList(transList,transBoardBody);
        lastFiveListRender(lastFiveBody,transactions);
        allTransactionsRender(transBoardBody,transactions);
    }   

    money.innerText = `${Transaction.total()}$`;
    analitics(transactions);
}