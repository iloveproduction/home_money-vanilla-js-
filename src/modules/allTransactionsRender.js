import {createItem} from './createItem';

function allTransactionsRender(place,arr){
    for (let i in arr){
        createItem(i,arr,place,true);
    }
}

export {allTransactionsRender};