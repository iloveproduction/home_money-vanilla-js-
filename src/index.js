import './index.sass';
import {brands} from './data/brands.js'

const transactions = JSON.parse(localStorage.getItem("Transactions"));
const app = document.querySelector('.transactions__list')
const money = document.querySelector('.balance__money')
const analitics = document.querySelector('.analitics__body')
const total = document.querySelector('.account-board__total')
const transAdd = document.querySelector('.account-board__add-item')

const btnAdd = document.querySelector('.add')
const plusBtn = document.querySelector('.transactions-buttons__plus')
const closeBtn = document.querySelector('.close')

const newItem = document.querySelector('.new-item')
const newPrice = document.querySelector('.price')

if (transactions===null || transactions.length==0){
    localStorage.setItem('Transactions',JSON.stringify([]))
    console.log('No transactions')
}else {
    lastFiveListRender()
}

money.innerText = `${totalMoney()}$`

function totalMoney(){
    let sum = 0
    for (let i in transactions){
        if (transactions[i].price==""){
            sum +=0
        }else{
            sum += parseInt(transactions[i].price)
        }
    }
    return (sum)
}

function createItem(i){
    let item = document.createElement('div')
    let color = ''
    if (transactions[i].price<0){
        color = 'minus'
    }else{
        color = 'plus'
    }

    let brand='shopping-basket-2'

    for(let br in brands){
        if (br == transactions[i].title.toLowerCase()){
            brand = brands[br];
        }
    }

    let date = transactions[i].date
    
    item.innerHTML = 
        `
        <div class='transactions-item__logo'>
            <img src="https://img.icons8.com/color/30/000000/${brand}.png"/>
        </div>
        <div class='transactions-item__title'>
            <div class='item__name'>
                ${transactions[i].title.toUpperCase()}
            </div>
            <div class="item__date">
                        ${date.day}.${date.month}.${date.year}
            </div>
        </div> 
        <div class='transactions-item__price  ${color}'>
            ${transactions[i].price}
        </div`
    app.insertBefore(item, app.firstChild)
    item.classList.add('transactions-item')
}

function addItem(){
    let transaction = {}
    let transDate = {}

    let date = new Date()
    transDate.month = date.getMonth() + 1
    transDate.day = date.getDate()
    transDate.year = date.getFullYear()

    transaction.title = newItem.value
    transaction.price = newPrice.value
    transaction.date = transDate
    transactions.push(transaction)
    localStorage.setItem("Transactions", JSON.stringify(transactions));
    newItem.value=''
    newPrice.value=''
    setTimeout(function(){
        while (app.firstChild){
            app.removeChild(app.firstChild)
        }
        lastFiveListRender()
        money.innerText = `${totalMoney()}$`
    },1000)
}

function lastFiveListRender(){
    if (transactions.length < 5){
        for (let i in transactions){
            createItem(i)
        }
    }else{
        for (let i=transactions.length-5;i < transactions.length;i++){
            createItem(i)
        }
    }
}

function clearList(){
    for (let i=0; transactions.length; i++){
        transactions.pop();
    }
    while (app.firstChild){
        app.removeChild(app.firstChild)
    }
    localStorage.setItem("Transactions", JSON.stringify(transactions))
}

function toggleAddPanel(...elems){
    elems.map((elem)=>{elem.classList.toggle('hidden')})
}

plusBtn.addEventListener('click', ()=>{toggleAddPanel(total,transAdd)})

closeBtn.addEventListener('click', ()=>{toggleAddPanel(total,transAdd)})

btnAdd.addEventListener('click', addItem)