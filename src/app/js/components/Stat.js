/**
 * Created by 3fuyu on 2016/10/27.
 */

import {Component} from "react";
import echarts from "echarts";
import {Tabs, Tab} from "../../../../node_modules/material-ui/Tabs";
import "../../css/stat.less";

class Stat extends Component {

    state = {
        PUOption: {},
        PUOptionMonth: {},
        PUEchart: ''
    };


    componentDidMount() {
        let t = this;
        let PUEchart = echarts.init(document.getElementsByClassName('pv-uv-stat')[0]);
        let CMEchart = echarts.init(document.getElementsByClassName('company-month-stat')[0]);
        let UMEchart = echarts.init(document.getElementsByClassName('user-month-stat')[0]);
        let AVEchart = echarts.init(document.getElementsByClassName('all-visit-stat')[0]);
        let NUEchart = echarts.init(document.getElementsByClassName('new-user-stat')[0]);

        let PUOption = {
            title: {
                text: '总访问量',
                subtext: 'by 3fuyu'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['pv', 'uv']
            },
            toolbox: {
                show: true,
                feature: {
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: []
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [{
                name: 'pv',
                type: 'line',
                data: [],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                },
                itemStyle: {
                    normal: {
                        color:'#1FBCD2'
                    }
                }
            }, {
                name: 'uv',
                type: 'line',
                data: [],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                },
                itemStyle: {
                    normal: {
                        color: '#BF3635'
                    }
                }
            }]
        };
        let PUOption_month = {
            title: {
                text: '总访问量',
                subtext: 'by 3fuyu'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['pv', 'uv']
            },
            toolbox: {
                show: true,
                feature: {
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name: 'pv',
                    type: 'line',
                    data: [1233, 1332, 2433, 2521, 2698, 2578, 2200, 3400, 3500, 3600],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name: 'uv',
                    type: 'line',
                    data: [300, 690, 1390, 2513, 2898, 3109, 3723, 4300, 4500, 4700],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                }
            ]
        };
        t.setState({
            PUOption: PUOption,
            PUOptionMonth: PUOption_month,
            PUEchart: PUEchart
        });
        PUEchart.setOption(PUOption);
        CMEchart.setOption(PUOption);
        NUEchart.setOption(PUOption);
        AVEchart.setOption(PUOption);
        UMEchart.setOption(PUOption);

        this.getPUEchartData(PUEchart);
        this.getCMEchartData(CMEchart);
        this.getNUEchartData(NUEchart);
        this.getAVEchartData(AVEchart);
        this.getUMEchartData(UMEchart);

        setTimeout(function () {
            t.bindEvent(PUEchart);
        }, 0);
    }

    getPUEchartData(PUEchart) {
        let t = this;

        let data = {
            category: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            pvData: [1233, 1332, 2433, 2521, 2698, 2578, 2200, 3400, 3500, 3600],
            uvData: [300, 690, 1390, 2513, 2898, 3109, 3723, 4300, 4500, 4700]
        };
        PUEchart.showLoading();
        setTimeout(function () {
            PUEchart.hideLoading();
            PUEchart.setOption({
                xAxis: {
                    data: data.category
                },
                series: [{
                    name: 'pv',
                    data: data.pvData
                }, {
                    name: 'uv',
                    data: data.uvData
                }]
            });
        }, 1000);
    }

    getCMEchartData(CMEchart) {
        let t = this;

        let data = {
            category: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            pvData: [1233, 1332, 2433, 2521, 2698, 2578, 2200, 3400, 3500, 3600],
            uvData: [300, 690, 1390, 2513, 2898, 3109, 3723, 4300, 4500, 4700]
        };
        CMEchart.showLoading();
        setTimeout(function () {
            CMEchart.hideLoading();
            CMEchart.setOption({
                xAxis: {
                    data: data.category
                },
                series: [{
                    name: 'pv',
                    data: data.pvData
                }, {
                    name: 'uv',
                    data: data.uvData
                }]
            });
        }, 1000);
    }

    getNUEchartData(NUEchart) {
        let t = this;

        let data = {
            category: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            pvData: [1233, 1332, 2433, 2521, 2698, 2578, 2200, 3400, 3500, 3600],
            uvData: [300, 690, 1390, 2513, 2898, 3109, 3723, 4300, 4500, 4700]
        };
        NUEchart.showLoading();
        setTimeout(function () {
            NUEchart.hideLoading();
            NUEchart.setOption({
                xAxis: {
                    data: data.category
                },
                series: [{
                    name: 'pv',
                    data: data.pvData
                }, {
                    name: 'uv',
                    data: data.uvData
                }]
            });
        }, 1000);
    }

    getAVEchartData(AVEchart) {
        let t = this;

        let data = {
            category: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            pvData: [1233, 1332, 2433, 2521, 2698, 2578, 2200, 3400, 3500, 3600],
            uvData: [300, 690, 1390, 2513, 2898, 3109, 3723, 4300, 4500, 4700]
        };
        AVEchart.showLoading();
        setTimeout(function () {
            AVEchart.hideLoading();
            AVEchart.setOption({
                xAxis: {
                    data: data.category
                },
                series: [{
                    name: 'pv',
                    data: data.pvData
                }, {
                    name: 'uv',
                    data: data.uvData
                }]
            });
        }, 1000);
    }

    getUMEchartData(UMEchart) {
        let t = this;

        let data = {
            category: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            pvData: [1233, 1332, 2433, 2521, 2698, 2578, 2200, 3400, 3500, 3600],
            uvData: [300, 690, 1390, 2513, 2898, 3109, 3723, 4300, 4500, 4700]
        };
        UMEchart.showLoading();
        setTimeout(function () {
            UMEchart.hideLoading();
            UMEchart.setOption({
                xAxis: {
                    data: data.category
                },
                series: [{
                    name: 'pv',
                    data: data.pvData
                }, {
                    name: 'uv',
                    data: data.uvData
                }]
            });
        }, 1000);
    }

    bindEvent(myEchart) {
        // 消除自带背景色
        $('.stat-tab-list').closest('button').closest('div').css({background: 'none'});

        $('.app-bar-btn').on('click', function () {
            // 等待动画结束重算size
            setTimeout(function () {
                myEchart.resize();
            }, 200);
        });

        $('.stat-tab-list').mouseenter(function (e) {
            $(e.target).closest('button').css({backgroundColor: 'rgba(153,153,153,0.2)'}).closest('div')
            .css({background: 'none'});
        });

        $('.stat-tab-list').mouseleave(function (e) {
            $(e.target).closest('button').css({backgroundColor: '#fff'})
            .closest('div').css({background: 'none'});
        });

    }

    selectDate(type) {
        if (type === 'week') {
            this.state.PUEchart.setOption(this.state.PUOption);
        } else if (type === 'month') {
            this.state.PUEchart.setOption(this.state.PUOptionMonth);
        }
    }

    render() {
        let styles = {
            tabs: {
                width: 200,
                marginBottom: 20
            },
            tab: {
                color: '#00bcd4',
                backgroundColor: '#fff',
                transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
                borderRadius: 2
            }
        };

        return (
            <div id="stat">
                <div className="today-stat">
                    <div className="today-pv">
                        <div className="pv-word">今日浏览量(PV)</div>
                        <div className="pv-data">8335</div>
                    </div>
                    <div className="today-uv">
                        <div className="uv-word">今日用户(UV)</div>
                        <div className="uv-data">8335</div>
                    </div>
                    <div className="today-total">
                        <div className="total-word">总访问量</div>
                        <div className="total-data">13335</div>
                    </div>
                </div>
                <div className="allday-stat">
                    <div className="allday-company">
                        <div className="company-word">累计企业数(家)</div>
                        <div className="company-data">8335</div>
                    </div>
                    <div className="allday-user">
                        <div className="user-word">累计用户数(人)</div>
                        <div className="user-data">83335</div>
                    </div>
                    <div className="allday-content">
                        <div className="content-word">内容产生总量(条)</div>
                        <div className="content-data">4335</div>
                    </div>
                </div>

                <Tabs style={styles.tabs}>
                    <Tab label="最近7日" style={styles.tab} className="stat-tab-list"
                         onActive={() => this.selectDate('week')}></Tab>
                    <Tab label="最近30日" style={styles.tab} className="stat-tab-list"
                         onActive={() => this.selectDate('month')}></Tab>
                </Tabs>

                <div className="pv-uv-stat"></div>
                <div className="company-month-stat"></div>
                <div className="user-month-stat"></div>
                <div className="all-visit-stat"></div>
                <div className="new-user-stat"></div>
            </div>
        );
    }
}

export default Stat;