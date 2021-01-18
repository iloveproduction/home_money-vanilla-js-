export function totalMoney(transactions){
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