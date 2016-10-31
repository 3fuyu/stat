/**
 * Created by 3fuyu on 16/10/11.
 */

import {Component} from "react";
import {Tabs, Tab} from "../../../../node_modules/material-ui/Tabs";
import "../../css/main.less";
import "../../css/user.less";
import echarts from "echarts";

class ArticleList extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillMount() {
        let t = this;

        // DataService.adminQueryArticleList().then(function (data) {
        //     t.setState({
        //         tableData: tableData
        //     });
        // });
    }

    componentDidMount() {
        let t = this;
        let CCEchart = echarts.init(document.getElementsByClassName('company-content-stat')[0]);
        let ACEchart = echarts.init(document.getElementsByClassName('all-content-stat')[0]);

        let CCOption = {
            title: {
                text: '企业内容产生量',
                subtext: 'by 3fuyu'
            },
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            toolbox: {
                show: true,
                feature: {
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: [],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [{
                name: '用户数',
                type: 'bar',
                barWidth: '60%',
                data: []
            }]
        };
        let ACOption = {
            title: {
                text: '总内容量',
                subtext: 'by 3fuyu'
            },
            tooltip: {
                trigger: 'axis'
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
                name: '内容总量',
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
                        color: '#3A99D8'
                    }
                }
            }]
        };

        CCEchart.setOption(CCOption);
        ACEchart.setOption(ACOption);

        this.getCCEchartData(CCEchart);
        this.getACEchartData(ACEchart);

        setTimeout(function () {
            t.bindEvent(CCEchart, ACEchart);
        }, 0);
    }

    getCCEchartData(CCEchart) {
        let t = this;

        let data = {
            category: ['百度', '360', '腾讯', '阿里', '中兴', '创维', '联想', '华为', '大疆', '用友'],
            data: [1233, 1332, 2433, 2521, 2698, 2578, 2200, 3400, 3500, 3600]
        };

        CCEchart.showLoading();
        setTimeout(function () {
            CCEchart.hideLoading();
            CCEchart.setOption({
                xAxis: {
                    data: data.category
                },
                series: [{
                    name: '前十名企业',
                    data: data.data
                }]
            });
        }, 1000);
    }

    getACEchartData(ACEchart) {
        let t = this;

        let data = {
            category: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            data: [1233, 1332, 2433, 2521, 2698, 2578, 2200, 3400, 3500, 3600]
        };

        ACEchart.showLoading();
        setTimeout(function () {
            ACEchart.hideLoading();
            ACEchart.setOption({
                xAxis: {
                    data: data.category
                },
                series: [{
                    name: '前十名企业',
                    data: data.data
                }]
            });
        }, 1000);
    }

    selectDate(type) {
        if (type === 'week') {
            // this.state.PUEchart.setOption(this.state.PUOption);
        } else if (type === 'month') {
            // this.state.PUEchart.setOption(this.state.PUOptionMonth);
        }
    }

    bindEvent(CCEchart, ACEchart) {
        $('.stat-tab-list').closest('button').closest('div').css({background: 'none'});

        $('.app-bar-btn').on('click', function () {
            // 等待动画结束重算size
            setTimeout(function () {
                CCEchart.resize();
                ACEchart.resize();
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
            <div id="user">
                <div className="company-content-stat" style={{height: '400px'}}></div>

                <Tabs style={styles.tabs}>
                    <Tab label="最近7日" style={styles.tab} className="stat-tab-list"
                         onActive={() => this.selectDate('week')}></Tab>
                    <Tab label="最近30日" style={styles.tab} className="stat-tab-list"
                         onActive={() => this.selectDate('month')}></Tab>
                </Tabs>
                <div className="all-content-stat" style={{height: '400px'}}></div>
            </div>
        );
    }
}

export default ArticleList;