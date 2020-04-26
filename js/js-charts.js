
// 欠费图表
function arrearsChartRender() {
    var arrearsChart = document.getElementById('arrearsChart');

    // 指定图表的配置项和数据
    var barChart = echarts.init(arrearsChart);
    var barOption = {
        // 坐标轴X
        xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            //   坐标轴文字样式
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',  //更改坐标轴文字颜色
                    fontSize: 12      //更改坐标轴文字大小
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#132A51' //更改坐标轴颜色
                }
            },
            data: ['集团', '华中', '华南', '华北']
        },

        // 坐标轴y
        yAxis: {
            type: 'value',
            show: false
        },

        // 坐标轴位置
        grid: {
            x: 10,
            y: 20,
            x2: 10,
            y2: 20
        },

        series: [{
            data: [120, 200, 150, 80],
            type: 'bar',
            itemStyle: {
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius: [50, 50, 0, 0],

                    // 柱状图上方文字
                    label: {
                        formatter: "111人",
                        show: true,
                        position: "top",
                        textStyle: {
                            fontSize: "12",
                            color: "#fff"
                        }
                    },
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#FF4746' },                   //柱图渐变色

                            { offset: 1, color: '#EF4D30' },                   //柱图渐变色
                        ]
                    )

                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#FF4746' },                   //柱图渐变色

                            { offset: 1, color: '#EF4D30' },                   //柱图渐变色
                        ]
                    )
                }
            },
            barWidth: 8,
            barGap: '0%'
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    barChart.setOption(barOption);
}

// 达成率图表
function achievementChartRender() {
    var achievementChart = document.getElementById('achievementChart');

    // 指定图表的配置项和数据
    var barChart = echarts.init(achievementChart);
    var barOption = {
        // 坐标轴X
        xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            //   坐标轴文字样式
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',  //更改坐标轴文字颜色
                    fontSize: 12      //更改坐标轴文字大小
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#132A51' //更改坐标轴颜色
                }
            },
            data: ['集团', '华中', '华南', '华北']
        },

        // 坐标轴y
        yAxis: {
            type: 'value',
            show: false
        },

        // 坐标轴位置
        grid: {
            x: 10,
            y: 20,
            x2: 10,
            y2: 20
        },

        series: [{
            data: [120, 200, 150, 80],
            type: 'bar',
            itemStyle: {
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius: [50, 50, 0, 0],

                    // 柱状图上方文字
                    label: {
                        formatter: "111人",
                        show: true,
                        position: "top",
                        textStyle: {
                            fontSize: "12",
                            color: "#fff"
                        }
                    },
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#4930EF' },                   //柱图渐变色

                            { offset: 1, color: '#00FFC7' },                   //柱图渐变色
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#4930EF' },                   //柱图渐变色

                            { offset: 1, color: '#00FFC7' },                   //柱图渐变色
                        ]
                    )
                }
            },
            barWidth: 8,
            barGap: '0%'
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    barChart.setOption(barOption);
}

// 押不低租
function mortgageChartRender() {
    var mortgageChart = echarts.init(document.getElementById('mortgageChart'));

    var ringOptions = {
        graphic: [{ //环形图中间添加文字
            type: 'text', //通过不同top值可以设置上下显示
            left: 'center',
            top: '45%',
            style: {
                text: '180%',
                textAlign: 'center',
                fill: '#fff', //文字的颜色
                width: 30,
                height: 30,
                fontSize: 18,
                fontFamily: "Microsoft YaHei"
            }
        }],
        series: [
            {
                hoverAnimation: false,
                clickable:false,
                name: '访问来源',
                type: 'pie',
                radius: ['90%', '100%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '18',
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: 335, name: '' },
                ]
            }
        ]
    };
    mortgageChart.setOption(ringOptions);
}

// 地图
function mapRender(){
    var myChart = echarts.init(document.getElementById('china-map'));


    var data = [{
        name: '浙江',
        value1: 0,
        value2: 5,
    },{
        name: '山东',
        value1: 0,
        value2: 5,
    },{
        name: '上海',
        value1: 0,
        value2: 5,
    },{
        name: '河南',
        value1: 0,
        value2: 5,
    }];


    var resultdata0 = [];
    var sum0 = 0;
    var titledata = [];
    for (var i = 0; i < data.length; i++) {
        var d0 = {
            name: data[i].name,
            value: data[i].value1 + data[i].value2
        };
        titledata.push(data[i].name)
        resultdata0.push(d0);
        sum0 += data[i].value1 + data[i].value2;
    }

    function NumDescSort(a, b) {
        return a.value - b.value;
    }

    resultdata0.sort(NumDescSort);

    var option = {
        dataRange: {
            show: false,
            x: 'left',
            y: 'bottom',
            splitList: [
                { start: 5, end: 5, color: '#061734' },//当值为5时，区域背景
                { start: 0, end: 0, color: '#aaa' },//当值为0时，区域背景
               
            ],
        },
        xAxis: [{
            show: false,
            position: 'top',
            type: 'value',
            boundaryGap: false,
            splitLine: {
                show: false
            },
            axisLabel: {
                rotate: 45, 　　　　//刻度旋转45度角
                textStyle: {
                }
            }
        }],
        yAxis: [{
            show: false,
            type: 'category',
            data: titledata,
            axisTick: {
                alignWithLabel: true
            }
        }],
        
        series: [{
            
            hoverable: false,
            z: 1,
            type: 'map',
            map: 'china',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zoom: 1,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            //roam: true,
            data: resultdata0
        }]
    };
    myChart.setOption(option);


    // 设置鼠标滑过的样式
    myChart.on('mousemove', function (params) {
        params.value = 100;
        myChart.setOption(option);
    })

    //点击事件
    myChart.on('click', function (params) {//点击事件
        var mapInfo = document.getElementById('mapInfo');
        console.log(params)
        if(!params.data || params.data.value !== 5){
            mapInfo.style.display = 'none'
            return false
        }
        mapInfo.style.display = 'block'

    });
    //初始化省颜色
    function ini_province() {
        var ini_len = option.series[0].data.length;
        for (var i = 0; i < ini_len; i++) {
            //初始化颜色
            option.series[0].data[i].value = 5;
            myChart.setOption(option);
        }

    }
    //选中省颜色
    function select_province(province_name) {
        var len = option.series[0].data.length;
        for (var i = 0; i < len; i++) {
            if (option.series[0].data[i].name == province_name) {//如果匹配正确
                //先归零
                ini_province();
                //改变颜色
                option.series[0].data[i].value = 15;
                myChart.setOption(option);
            }
        }
    }
}



// 由于页面使用了rem单位,所以需要在页面完全渲染完成之后再绘制图表, 否则图表展不开 ！

function chartsRender() {
    arrearsChartRender();
    achievementChartRender();
    mortgageChartRender();
    mapRender()
}
setTimeout(chartsRender, 300)