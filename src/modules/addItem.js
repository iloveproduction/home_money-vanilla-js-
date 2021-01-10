const newItem = document.querySelector('.new-item')
const newPrice = document.querySelector('.price')

export default function addItem(transactions){
    if (newItem.value == '' && newPrice.value == ''){
         console.log('work')
    }else{
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

        newItem.value=newPrice.value=''

        localStorage.setItem("Transactions", JSON.stringify(transactions));
    }
}