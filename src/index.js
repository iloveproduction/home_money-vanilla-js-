import './index.sass';
import toggleView from './modules/toggleView'
import totalMoney from './modules/totalMoney'
import lastFiveListRender from './modules/lastFiveListRender'
import addItem from './modules/addItem'
import analitics from './modules/analitics'

// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz"


const transactions = JSON.parse(localStorage.getItem("Transactions"));
const app = document.querySelector('.transactions__list')
const money = document.querySelector('.balance__money')
const total = document.querySelector('.account-board__balance')
const transAdd = document.querySelector('.account-board__add-item')
const dashboard = document.querySelector('.dashboard')
const transBoard = document.querySelector('.trans-board')
const dashboardLogo = document.querySelector('.dashboard-logo')
const transBoardLogo = document.querySelector('.transactions-logo')

const btnAdd = document.querySelector('.fields__add')
const plusBtn = document.querySelector('.account-board__button')
const closeBtn = document.querySelector('.form__close')

if (transactions===null || transactions.length==0){
    localStorage.setItem('Transactions',JSON.stringify([]))
    console.log('No transactions')
    app.innerHTML = '<div>No transactions yet...</div>'
}else {
    lastFiveListRender(transactions)
    analitics(transactions)
}

money.innerText = `${totalMoney(transactions)}$`

transBoardLogo.addEventListener('click', ()=>{toggleView(dashboard,transBoard)})
dashboardLogo.addEventListener('click', ()=>{toggleView(transBoard,dashboard)})
plusBtn.addEventListener('click', ()=>{toggleView(total,transAdd)})
closeBtn.addEventListener('click', ()=>{toggleView(total,transAdd)})
btnAdd.addEventListener('click', ()=>{
    addItem(transactions)
    setTimeout(function(){
        while (app.firstChild){
            app.removeChild(app.firstChild)
        }
        lastFiveListRender(transactions)
        analitics(transactions)
        money.innerText = `${totalMoney(transactions)}$`
    },1000)
})

// let arr = [{
//     month:1,
//     sum:0
// },
// {
//     month:2,
//     sum:0
// },
// {
//     month:3,
//     sum:0
// },
// {
//     month:4,
//     sum:0
// },
// {
//     month:5,
//     sum:0
// },
// {
//     month:6,
//     sum:0
// },
// {
//     month:7,
//     sum:0
// },
// {
//     month:8,
//     sum:0
// },
// {
//     month:9,
//     sum:0
// },
// {
//     month:10,
//     sum:0
// },
// {
//     month:11,
//     sum:0
// },
// {
//     month:12,
//     sum:0
// }]

// for (let i in transactions){
//     for(let item of arr){
//         if (transactions[i].date.month == item.month){
//             item.sum+=parseInt(transactions[i].price)
//         }
//         console.log('first',arr)
//     }
//     console.log('second',arr)
// }

// console.log('final',arr)

// am4core.useTheme(am4themes_dataviz)
// am4core.useTheme(am4themes_animated)

// let chart = am4core.create('analitics__body', am4charts.XYChart)

// chart.data = arr

// let xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
// xAxis.dataFields.category = 'month'
// xAxis.renderer.minGridDistance = 50
// xAxis.renderer.grid.template.location = 0.5
// xAxis.startLocation = 0.5
// xAxis.endLocation = 0.5

// let yAxis = chart.yAxes.push(new am4charts.ValueAxis())
// yAxis.baseValue = 0

// let series = chart.series.push(new am4charts.LineSeries())
// series.dataFields.valueY = "sum";
// series.dataFields.categoryX = "month";
// series.strokeWidth = 2;
// series.tensionX = 0.77;

// let bullet = series.bullets.push(new am4charts.Bullet());
// bullet.tooltipText = "{valueY}";

// bullet.adapter.add("fill", function(fill, target){
//     if(target.dataItem.valueY < 0){
//         return am4core.color("#FF0000");
//     }
//     return fill;
// })
// // let range = yAxis.createSeriesRange(series);
// // range.value = 0;
// // range.endValue = -1000;
// // range.contents.stroke = am4core.color("#FF0000");
// // range.contents.fill = range.contents.stroke;

// // Add scrollbar
// // let scrollbarX = new am4charts.XYChartScrollbar();
// // scrollbarX.series.push(series);
// // chart.scrollbarX = scrollbarX;

// chart.cursor = new am4charts.XYCursor();