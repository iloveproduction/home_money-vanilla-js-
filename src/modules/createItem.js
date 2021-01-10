import {brands} from '../data/brands'

export default function createItem(i,transactions){
    let item = document.createElement('div')
    let brand='shopping-basket-2'
    let color = ''
    let date = transactions[i].date
    const list = document.querySelector('.transactions__list')

    if (transactions[i].price < 0){
        color = 'minus'
    }else{
        color = 'plus'
    }

    for(let br in brands){
        if (br == transactions[i].title.toLowerCase()){
            brand = brands[br];
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
                        ${date.day}.${date.month}.${date.year}
            </div>
        </div> 
        <div class='transactions-item__price  ${color}'>
            ${transactions[i].price}
        </div`
    list.insertBefore(item, list.firstChild)
    item.classList.add('transactions-item')
}