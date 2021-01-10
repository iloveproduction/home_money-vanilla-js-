import createItem from './createItem'

export default function lastFiveListRender(transactions){
    if (transactions.length < 5){
        for (let i in transactions){
            createItem(i,transactions)
        }
    }else{
        for (let i=transactions.length-5;i < transactions.length;i++){
            createItem(i,transactions)
        }
    }
}