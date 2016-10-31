/**
 * Created by 3fuyu on 16/10/11.
 */

import {Component} from "react";
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from "../../../../node_modules/material-ui/Table";
import "../../css/main.less";
import "../../css/user.less";
import moment from "moment";
import echarts from "echarts";

const tableData = [{
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com',
    accountName: '3fuyu'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com',
    accountName: '3fuyu'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com',
    accountName: '3fuyu'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com',
    accountName: '3fuyu'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com',
    accountName: '3fuyu'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com',
    accountName: '3fuyu'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com',
    accountName: '3fuyu'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com',
    accountName: '3fuyu'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com',
    accountName: '3fuyu'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com',
    accountName: '3fuyu'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com',
    accountName: '3fuyu'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com',
    accountName: '3fuyu'
}];

class ArticleList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fixedHeader: true,
            fixedFooter: false,
            stripedRows: false,
            showRowHover: true,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: false,
            tableData: tableData
        };
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
        let CUEchart = echarts.init(document.getElementsByClassName('company-user-stat')[0]);

        let option = {
            title: {
                text: '企业累计用户数量',
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
            series: [
                {
                    name: '用户数',
                    type: 'bar',
                    barWidth: '60%',
                    data: []
                }
            ]
        };

        CUEchart.setOption(option);

        this.getCUEchartData(CUEchart);

        setTimeout(function () {
            t.bindEvent(CUEchart);
        },0);
    }

    getCUEchartData(CUEchart) {
        let t = this;

        let data = {
            category: ['百度', '360', '腾讯', '阿里', '中兴', '创维', '联想', '华为', '大疆', '用友'],
            data: [1233, 1332, 2433, 2521, 2698, 2578, 2200, 3400, 3500, 3600]
        };
        CUEchart.showLoading();
        setTimeout(function () {
            CUEchart.hideLoading();
            CUEchart.setOption({
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

    bindEvent(CUEchart) {
        $('.app-bar-btn').on('click', function () {
            // 等待动画结束重算size
            setTimeout(function () {
                CUEchart.resize();
            }, 200);
        });
    }

    render() {
        return (
            <div id="user">
                <div className="company-user-stat"></div>
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                >
                    <TableHeader className="list-head"
                                 displaySelectAll={this.state.showCheckboxes}
                                 adjustForCheckbox={this.state.showCheckboxes}
                                 enableSelectAll={this.state.enableSelectAll}
                    >
                        <TableRow>
                            <TableHeaderColumn style={{width: '10%'}}>ID</TableHeaderColumn>
                            <TableHeaderColumn style={{width: '16%'}}>用户名称</TableHeaderColumn>
                            <TableHeaderColumn style={{width: '24%'}}>企业名称</TableHeaderColumn>
                            <TableHeaderColumn style={{width: '16%'}}>联系电话</TableHeaderColumn>
                            <TableHeaderColumn style={{width: '16%'}}>新增时间</TableHeaderColumn>
                            <TableHeaderColumn style={{width: '18%'}}>帐户名称</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                        {this.state.tableData.map((row, index) => (
                            <TableRow key={index} selected={row.selected}>
                                <TableRowColumn style={{width: '10%'}}>{row.id}</TableRowColumn>
                                <TableRowColumn style={{width: '16%'}}>{row.contact}</TableRowColumn>
                                <TableRowColumn style={{width: '24%'}}>{row.companyName}</TableRowColumn>
                                <TableRowColumn style={{width: '16%'}}>{row.phone}</TableRowColumn>
                                <TableRowColumn style={{width: '16%'}}>
                                    {moment(row.addTime).format('YYYY-MM-DD')}
                                </TableRowColumn>
                                <TableRowColumn style={{width: '18%'}}>{row.accountName}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default ArticleList;