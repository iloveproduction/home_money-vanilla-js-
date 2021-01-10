import './index.sass';
import toggleView from './modules/toggleView'
import totalMoney from './modules/totalMoney'
import lastFiveListRender from './modules/lastFiveListRender'
import addItem from './modules/addItem'

const transactions = JSON.parse(localStorage.getItem("Transactions"));
const app = document.querySelector('.transactions__list')
const money = document.querySelector('.balance__money')
// const analitics = document.querySelector('.analitics__body')
const total = document.querySelector('.account-board__total')
const transAdd = document.querySelector('.account-board__add-item')
const dashboard = document.querySelector('.dashboard')
const transBoard = document.querySelector('.trans-board')
const dashboardLogo = document.querySelector('.dashboard-logo')
const transBoardLogo = document.querySelector('.trans-board-logo')

const btnAdd = document.querySelector('.add')
const plusBtn = document.querySelector('.transactions-buttons__plus')
const closeBtn = document.querySelector('.close')

if (transactions===null || transactions.length==0){
    localStorage.setItem('Transactions',JSON.stringify([]))
    console.log('No transactions')
    app.innerHTML = '<div>No transactions yet...</div>'
}else {
    lastFiveListRender(transactions)
}

money.innerText = `${totalMoney(transactions)}$`

transBoardLogo.addEventListener('click', ()=>{toggleView(dashboard,transBoard)})
dashboardLogo.addEventListener('click', ()=>{toggleView(transBoard,dashboard)})
plusBtn.addEventListener('click', ()=>{toggleView(total,transAdd)})
closeBtn.addEventListener('click', ()=>{toggleView(total,transAdd)})
btnAdd.addEventListener('click', ()=>{
    addItem(transactions)
    setTimeout(function(){
        while (app.firstChild){
            app.removeChild(app.firstChild)
        }
        lastFiveListRender(transactions)
        money.innerText = `${totalMoney(transactions)}$`
    },1000)
})