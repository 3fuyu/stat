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
import "../../css/company.less";
import moment from "moment";

const tableData = [{
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com'
}, {
    id: 1,
    companyName: '用友网络科技有限公司',
    addTime: 1477643028546,
    contact: '张先生',
    phone: '13043479040',
    email: '3fuyu@gmail.com'
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

    render() {
        return (
            <div id="company">
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
                            <TableHeaderColumn style={{width: '24%'}}>企业名称</TableHeaderColumn>
                            <TableHeaderColumn style={{width: '16%'}}>新增时间</TableHeaderColumn>
                            <TableHeaderColumn style={{width: '16%'}}>联系人</TableHeaderColumn>
                            <TableHeaderColumn style={{width: '16%'}}>联系电话</TableHeaderColumn>
                            <TableHeaderColumn style={{width: '18%'}}>联系邮箱</TableHeaderColumn>
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
                                <TableRowColumn style={{width: '24%'}}>{row.companyName}</TableRowColumn>
                                <TableRowColumn style={{width: '16%'}}>
                                    {moment(row.addTime).format('YYYY-MM-DD')}
                                    </TableRowColumn>
                                <TableRowColumn style={{width: '16%'}}>{row.contact}</TableRowColumn>
                                <TableRowColumn style={{width: '16%'}}>{row.phone}</TableRowColumn>
                                <TableRowColumn style={{width: '18%'}}>{row.email}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default ArticleList;