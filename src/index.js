import './index.sass';

const transactions = JSON.parse(localStorage.getItem("Transactions"));
const app = document.querySelector('.transactions__list')
const btn = document.querySelector('.add')
const newItem = document.querySelector('.new-item')
const newPrice = document.querySelector('.price')
// const clearBtn = document.querySelector('.clear')
const money = document.querySelector('.balance__money')
money.innerText = `${totalMoney()}$`

const plusBtn = document.querySelector('.transactions-buttons__plus')
const total = document.querySelector('.account-board__total')
const transAdd = document.querySelector('.account-board__add-item')

plusBtn.onclick = ()=>{
    total.classList.toggle('hidden')
    transAdd.classList.toggle('hidden')
}

const brandArr = {
    spotify:'spotify',
    steam:'steam',
    iherb:'iherb',
    samsung:'samsung',
    netflix:'netflix-desktop-app',
    ikea:'ikea',
    hulu:'hulu',
    zoom:'zoom',
    trello:'trello',
    airbnb:'airbnb',
    uber:'uber-app',
    nike:'nike',
    vk:'vk-com',
    linkedin:'linkedin',
    'youtube music':'youtube-music',
    xbox:'xbox--v1',
    'microsoft office':'microsoft-office-2019',
    slack:'slack-new',
    'google play music':'google-play-music',
    duolingo:'duolingo-logo',
    'burger king':'burger-king-logo',
    mcdonalds:'mcdonalds',
    starbucks:'starbucks',
    uplay:'uplay-app',
    origin:'origin',
    hbo:'hbo',
    xiaomi:'xiaomi',
    lego:'lego'
}

if (transactions===null || transactions.length==0){
    localStorage.setItem('Transactions',JSON.stringify([]))
    console.log('No transactions')
}else {
    lastFiveListRender()
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

function createItem(i){
    let item = document.createElement('div')
    let color = ''
    if (transactions[i].price<0){
        color = 'minus'
    }else{
        color = 'plus'
    }

    let brand='shopping-basket-2'

    for(let br in brandArr){
        if (br == transactions[i].title.toLowerCase()){
            brand = brandArr[br];
        }
    }
    
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
                        21.12.2020
            </div>
        </div> 
        <div class='transactions-item__price  ${color}'>
            ${transactions[i].price}
        </div`
    app.insertBefore(item, app.firstChild)
    item.classList.add('transactions-item')
}

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

function additem(){
        let transaction = {}
        transaction.title = newItem.value
        transaction.price = newPrice.value
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

function clearList(){
    for (let i=0; transactions.length; i++){
        transactions.pop();
    }
    while (app.firstChild){
        app.removeChild(app.firstChild)
    }
    localStorage.setItem("Transactions", JSON.stringify(transactions))
}

btn.addEventListener('click', additem)
// clearBtn.addEventListener('click', clearList)