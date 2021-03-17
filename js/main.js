$("#btnColumns").click(function(){
    Highcharts.chart('container',{
        chart:{
            type: 'column'
        },
        title:{
            text: 'Gráfica de Colores'
        },
        xAxis:{
            categories:['Rojo','Verde','Negro']
        },
        series:[{
            data:[
                {
                    name: 'Rojo',
                    color: "#ff0031",
                    y:1
                },
                {
                    name: 'Verde',
                    color: "#28a745",
                    y:3
                },
                {
                    name: 'Negro',
                    color: "black",
                    y:5
                }
        ]
        }]

    });
});

$("#btnDrilldownColumns").click(function(){
    Highcharts.chart('container',{
        chart:{
            type: 'column'
        },
        title: {
            text: 'Gráfica de ventas de celular'
        },
        xAxis:{
            type: 'category'
        },
        yAxis:{
            title: {
                text: 'Cantidad de modelos por marca'
            }
        },
        series:[{
            name: 'Móviles',
            colorByPoint: true,
            data:[
                {
                    name: 'Samsung',
                    y:5,
                    drilldown:'samsung'
                },
                {
                    name: 'Xiaomi',
                    y:6,
                    drilldown:'xiaomi'
                },
                {
                    name: 'Motorola',
                    y:4,
                    drilldown:'motorola'
                }
            ]
        }],
        drilldown:{
            series:[
                {
                    id:'samsung',
                    data:[
                        ['Samsung Galaxy S10', 4],
                        ['Samsung Galaxy S10+', 2],
                        ['Samsung Galaxy Note 9', 1],
                        ['Samsung Galaxy J7 Prime', 2],
                        ['Samsung Galaxy A8', 1]
                    ]
                },
                {
                    id:'xiaomi',
                    data:[
                        ['Xiaomi Mi 10', 4],
                        ['Xiaomi Mi 10 Pro', 6],
                        ['Xiaomi Redmi Note 10', 7],
                        ['Xiaomi Redmi Note 9', 1],
                        ['Xiaomi Redmi Note 8', 10],
                        ['Xiaomi Redmi Note 7', 5]
                    ]
                },
                {
                    id:'motorola',
                    data:[
                        ['Motorola G8', 4],
                        ['Motorola G7', 2],
                        ['Motorola One', 3],
                        ['Motorola Z3 Play', 6]
                    ]
                }
            ]
        }
    });
});

$("#btnLines").click(function(){
    Highcharts.chart('container', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Valores Mensuales'
        },
        xAxis: {
            categories: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
        },
        series: [{
            data: [2,3,4,6,7,9,6,4,3,2,1,5]
        }]
    });
});

$("#btnMultiLines").click(function(){
    Highcharts.chart('container',{
        chart:{
            type: 'line'
        },
        title:{
            text: 'Crecimiento del empleo por Áreas - Energia Solar'
        },
        xAxis:{
            allowDecimals:false
        },
        yAxis:{
            title:{
                text: 'Número de empleados'
            }
        },
        legend:{
            layout:'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        plotOptions:{
            series:{
                pointStart:2018
            }
        },
        series:[
            {
                name: 'Instalación',
                data: [1000,2000,3000,3500,4000]
            },
            {
                name: 'Frabricación',
                data: [1880,2580,3900,4500,5000]
            },
            {
                name: 'Ventas',
                data: [780,2000,3100,3700, 3800]
            }
        ]
    })
});

$("#btnArea").click(function(){
    alert('sin implementar');
});

$("#btnPie").click(function(){
    Highcharts.chart('container',{
        chart:{
            type: 'pie',
            plotBackgroundColor:'#f8f9fa',
            plotBorderWidth: 1,
            plotShadow: false
        },
        title:{
            text: 'Uso en el mercado de navegadores web'
        },
        tooltip:{
            pointFormat:'<b>{point.percentage:.2f}%</b>'
        },
        plotOptions:{
            pie:{
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels:{
                    enable:true,
                    format: '<b>{point.name}: </b>{point.percentage:.2f}%'
                }
            }
        },
        series:[
            {
                name: 'Marcas',
                colorByPoint: true,
                data:[
                    {
                        name: 'Google Chrome',
                        y:61.41,
                        sliced: true,
                        selected: true
                    },
                    {
                        name: 'Microsoft Internet Explorer',
                        y:11.84
                    },
                    {
                        name: 'Microsoft Edge',
                        y:4.67
                    },
                    {
                        name: 'Apple Safari',
                        y:4.18
                    },
                    {
                        name: 'Mozilla Firefox',
                        y:1.64
                    },
                    {
                        name: 'Opera',
                        y:1.6
                    },
                    {
                        name: 'Otros',
                        y:3.81
                    }
                ]
            }
        ]
    });
});

$("#btn2Axis").click(function(){
    Highcharts.chart('container',{
        title:{
            text: 'Gráfico de 2 ejes'
        },
        xAxis:{
            minPadding:0.05,
            maxPadding:0.05
        },
        series:[{
            data:[
                [0, 29.9],
                [1, 71.5],
                [3, 106.4]
            ]
        }]
    });
});

$("#btnData").click(function(){
    $.ajax({
        url:""
    })
});