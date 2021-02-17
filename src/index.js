import './styles/desktop.sass'
import './styles/phone.sass'
import {toggleView} from './modules/toggleView'
import {totalMoney} from './modules/totalMoney'
import {lastFiveListRender} from './modules/lastFiveListRender'
import {addItem} from './modules/addItem'
// import {analitics} from './modules/analitics'
import {allTransactionsRender} from './modules/allTransactionsRender'
import {removeItem} from './modules/removeItem'


const transactions = JSON.parse(localStorage.getItem("Transactions"));
const app = document.querySelector('.transactions__list');
const money = document.querySelector('.balance__money');
const total = document.querySelector('.account-board__balance');
const transAdd = document.querySelector('.account-board__add-item');
const dashboard = document.querySelector('.dashboard');
const transBoard = document.querySelector('.trans-board');
// const transBoardBody = document.querySelector('.trans-board__body')
const dashboardLogo = document.querySelector('.dashboard-logo');
const transBoardLogo = document.querySelector('.transactions-logo');
const modal = document.querySelector('.modal');

const btnAdd = document.querySelector('.fields__add');
const plusBtn = document.querySelector('.account-board__button');
const closeBtn = document.querySelector('.modal-header__close');

if (transactions===null || transactions.length==0){
    localStorage.setItem('Transactions',JSON.stringify([]));
    console.log('No transactions');
    app.innerHTML = '<div>No transactions yet...</div>';
}else {
    lastFiveListRender(transactions);
    // analitics(transactions)
    allTransactionsRender(transactions);
}

money.innerText = `${totalMoney(transactions)}$`;

transBoardLogo.addEventListener('click', ()=>{
    if(transBoard.classList.contains('hidden')){
        toggleView(dashboard,transBoard);
        removeItem(transactions);
    }
});
dashboardLogo.addEventListener('click', ()=>{
    if(dashboard.classList.contains('hidden')){
        toggleView(transBoard,dashboard);
    }
});
plusBtn.addEventListener('click', ()=>{toggleView(modal)});
closeBtn.addEventListener('click', ()=>{toggleView(modal)});
btnAdd.addEventListener('click', ()=>{
    addItem(transactions);
    setTimeout(function(){
        while (app.firstChild){
            app.removeChild(app.firstChild);
        }
        lastFiveListRender(transactions)
        // analitics(transactions)
        money.innerText = `${totalMoney(transactions)}$`;
    },1000);
});