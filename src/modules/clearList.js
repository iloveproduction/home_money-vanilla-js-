export default function clearList(transactions){
    const list = document.querySelector('.transactions__list')
    for (let i=0; transactions.length; i++){
        transactions.pop();
    }
    while (list.firstChild){
        list.removeChild(app.firstChild)
    }
    localStorage.setItem("Transactions", JSON.stringify(transactions))
}