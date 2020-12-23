let test = document.querySelector('.transactions__list2')
const transactions = JSON.parse(localStorage.getItem("Transactions"));

for (let i in transactions){
    createItem(i)
}

function createItem(i){
    let item = document.createElement('div')
    let color = ''
    if (transactions[i].price<0){
        color = 'minus'
    }else{
        color = 'plus'
    }
    item.innerHTML = 
        `<div class='transactions-item__title'>
            <div class='item__name'>
                ${transactions[i].title}
            </div>
            <div class="item__date">
                        21.12.2020
            </div>
        </div> 
        <div class='transactions-item__price  ${color}'>
            ${transactions[i].price}
        </div`
    test.insertBefore(item, test.firstChild)
    item.classList.add('transactions-item')
}
