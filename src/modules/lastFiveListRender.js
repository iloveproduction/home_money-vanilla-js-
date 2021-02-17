import {createItem} from './createItem';

const lastFiveBody = document.querySelector('.transactions__list');

export function lastFiveListRender(transactions){
    if (transactions.length < 5){
        for (let i in transactions){
            createItem(i,transactions,lastFiveBody,false);
        }
    }else{
        for (let i=0; i < 5; i++){
            createItem(i,transactions,lastFiveBody,false);
        }
    }
}