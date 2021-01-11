import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz"

export default function analitics(transactions){

    am4core.useTheme(am4themes_dataviz)
    am4core.useTheme(am4themes_animated)

    let chart = am4core.create('analitics__body', am4charts.XYChart)
    chart.data = [{
    month:1,
    sum:0
    },
    {
    month:2,
    sum:0
    },
    {
    month:3,
    sum:0
    },
    {
    month:4,
    sum:0
    },
    {
    month:5,
    sum:0
    },
    {
    month:6,
    sum:0
    },
    {
    month:7,
    sum:0
    },
    {
    month:8,
    sum:0
    },
    {
    month:9,
    sum:0
    },
    {
    month:10,
    sum:0
    },
    {
    month:11,
    sum:0
    },
    {
    month:12,
    sum:0
    }]

    for (let i in transactions){
        for(let item of chart.data){
            if (transactions[i].date.month == item.month){
                item.sum+=parseInt(transactions[i].price)
            }
        }
    }

    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'month'
    xAxis.renderer.minGridDistance = 50
    xAxis.renderer.grid.template.location = 0.5
    xAxis.startLocation = 0.5
    xAxis.endLocation = 0.5

    let yAxis = chart.yAxes.push(new am4charts.ValueAxis())
    yAxis.baseValue = 0

    let series = chart.series.push(new am4charts.LineSeries())
    series.dataFields.valueY = "sum"
    series.dataFields.categoryX = "month"
    series.strokeWidth = 2
    series.tensionX = 0.77

    let bullet = series.bullets.push(new am4charts.Bullet())
    bullet.tooltipText = "{valueY}"

    bullet.adapter.add("fill", function(fill, target){
        if(target.dataItem.valueY < 0){
            return am4core.color("#FF0000")
        }
            return fill
        })

    let range = yAxis.createSeriesRange(series)
    range.value = 0
    range.endValue = -1000
    range.contents.stroke = am4core.color("#FF0000")
    range.contents.fill = range.contents.stroke

    chart.cursor = new am4charts.XYCursor()
}