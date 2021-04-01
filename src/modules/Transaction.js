const transactions = JSON.parse(localStorage.getItem("Transactions"));

export default class Transaction {
    constructor(title,price){
        this.title = title;
        this.price = price;
    }

    add(){
        if(this.title == '' || this.price == ''){
            console.log("Введите значение!");
        } else {
            let transaction = {};
            let transDate = {};

            let date = new Date();
            transDate.month = date.getMonth() + 1;
            transDate.day = date.getDate();
            transDate.year = date.getFullYear();

            transaction.title = this.title;
            transaction.price = this.price;
            transaction.date = transDate;
            transactions.unshift(transaction);

            localStorage.setItem("Transactions", JSON.stringify(transactions));
        }
    }

    static delete(index){
        transactions.splice(index,1);
        localStorage.setItem("Transactions",JSON.stringify(transactions));
    }

    static total(){
        let sum = 0;

        for (let item of transactions){
            if (item.price==""){
                sum +=0;
            }else{
                sum += parseInt(item.price);
            }
        }
        return (sum);
    }

    static clear(){
        
    }
}