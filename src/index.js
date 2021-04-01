import './styles/desktop.sass'
import './styles/phone.sass'

import Transaction from './modules/Transaction'
import {appInit} from './modules/appInit'
import {toggleView} from './modules/toggleView'
import {removeItem} from './modules/removeItem'

const dashboard = document.querySelector('.dashboard');
const transBoard = document.querySelector('.trans-board');
const dashboardLogo = document.querySelector('.dashboard-logo');
const transBoardLogo = document.querySelector('.transactions-logo');
const modal = document.querySelector('.modal');

const btnAdd = document.querySelector('.fields__add');
const plusBtn = document.querySelector('.button');
const closeBtn = document.querySelector('.modal-header__close');

appInit();

transBoardLogo.addEventListener('click', ()=>{
    if(transBoard.classList.contains('hidden')){
        toggleView(dashboard,transBoard);
        appInit();
        removeItem();
    }
});
dashboardLogo.addEventListener('click', ()=>{
    if(dashboard.classList.contains('hidden')){
        toggleView(transBoard,dashboard);
        appInit();
    }
});

plusBtn.addEventListener('click', ()=>{toggleView(modal)});
closeBtn.addEventListener('click', ()=>{toggleView(modal)});
btnAdd.addEventListener('click', ()=>{
    const newItem = document.querySelector('.fields__new-item');
    const newPrice = document.querySelector('.fields__price');

    let transaction = new Transaction(newItem.value,newPrice.value);
    transaction.add();
    newItem.value=newPrice.value='';
    setTimeout(function(){
        appInit();
    },1000);
});



