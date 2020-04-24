
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



// 由于页面使用了rem单位,所以需要在页面完全渲染完成之后再绘制图表, 否则图表展不开 ！

function chartsRender() {
    arrearsChartRender();
    achievementChartRender();
    mortgageChartRender();
}
setTimeout(chartsRender, 300)