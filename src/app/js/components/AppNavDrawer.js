import React, {Component, PropTypes} from "react";
import Drawer from "../../../../node_modules/material-ui/Drawer";
import {List, ListItem, MakeSelectable} from "../../../../node_modules/material-ui/List";
import {zIndex} from "../../../../node_modules/material-ui/styles";

const SelectableList = MakeSelectable(List);

class AppNavDrawer extends Component {
    static propTypes = {
        docked: PropTypes.bool.isRequired,
        location: PropTypes.object.isRequired,
        onChangeList: PropTypes.func.isRequired,
        onRequestChangeNavDrawer: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        style: PropTypes.object,
    };

    static contextTypes = {
        muiTheme: PropTypes.object.isRequired,
        router: PropTypes.object.isRequired,
    };

    state = {
        muiVersions: [],
        leftOpen: true
    };

    componentDidMount() {

    }

    render() {
        const {
            location,
            docked,
            onRequestChangeNavDrawer,
            onChangeList,
            open,
            style,
        } = this.props;

        return (
            <Drawer open={open}
                    className="menu"
                    style={style}
                    docked={docked}
                    onRequestChange={onRequestChangeNavDrawer}
                    containerStyle={{zIndex: zIndex.drawer - 100}}
            >
                <div className="menu-title">
                    统计
                </div>
                <SelectableList
                    value={location.pathname}
                    onChange={onChangeList}
                >
                    <ListItem
                        primaryText="任务"
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem primaryText="基本统计"
                                      value="/stat/task"
                                      key="1"
                                      href="#/stat/task"
                            />,
                            <ListItem primaryText="累计企业家"
                                      value="/company/task"
                                      key="2"
                                      href="#/company/task"
                            />,
                            <ListItem primaryText="累计用户数"
                                      value="/user/task"
                                      key="3"
                                      href="#/user/task"
                            />,
                            <ListItem primaryText="总内容生产量"
                                      value="/content/task"
                                      key="4"
                                      href="#/content/task"
                            />
                        ]}
                    />
                    <ListItem
                        primaryText="签到"
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem primaryText="基本统计"
                                      value="/stat/signin"
                                      key="5"
                                      href="#/stat/signin"
                            />,
                            <ListItem primaryText="累计企业家"
                                      value="/company/signin"
                                      key="6"
                                      href="#/company/signin"
                            />,
                            <ListItem primaryText="累计用户数"
                                      value="/user/signin"
                                      key="7"
                                      href="#/user/signin"
                            />,
                            <ListItem primaryText="总内容生产量"
                                      value="/content/signin"
                                      key="8"
                                      href="#/content/signin"
                            />
                        ]}
                    />
                    <ListItem
                        primaryText="公告"
                        value="/comment"
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem primaryText="基本统计"
                                      value="/stat/note"
                                      key="9"
                                      href="#/stat/note"
                            />,
                            <ListItem primaryText="累计企业家"
                                      value="/company/note"
                                      key="10"
                                      href="#/company/note"
                            />,
                            <ListItem primaryText="累计用户数"
                                      value="/user/note"
                                      key="11"
                                      href="#/user/note"
                            />,
                            <ListItem primaryText="总内容生产量"
                                      value="/content/note"
                                      key="12"
                                      href="#/content/note"
                            />
                        ]}
                    />
                    <ListItem
                        primaryText="日程"
                        value="/comment"
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem primaryText="基本统计"
                                      value="/stat/agenda"
                                      key="13"
                                      href="#/stat/agenda"
                            />,
                            <ListItem primaryText="累计企业家"
                                      value="/company/agenda"
                                      key="14"
                                      href="#/company/agenda"
                            />,
                            <ListItem primaryText="累计用户数"
                                      value="/user/agenda"
                                      key="15"
                                      href="#/user/agenda"
                            />,
                            <ListItem primaryText="总内容生产量"
                                      value="/content/agenda"
                                      key="16"
                                      href="#/content/agenda"
                            />
                        ]}
                    />
                    <ListItem
                        primaryText="问答"
                        value="/comment"
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem primaryText="基本统计"
                                      value="/stat/question"
                                      key="17"
                                      href="#/stat/question"
                            />,
                            <ListItem primaryText="累计企业家"
                                      value="/company/question"
                                      key="18"
                                      href="#/company/question"
                            />,
                            <ListItem primaryText="累计用户数"
                                      value="/user/question"
                                      key="19"
                                      href="#/user/question"
                            />,
                            <ListItem primaryText="总内容生产量"
                                      value="/content/question"
                                      key="20"
                                      href="#/content/question"
                            />
                        ]}
                    />
                    <ListItem
                        primaryText="工作中心"
                        value="/comment"
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem primaryText="基本统计"
                                      value="/stat/work"
                                      key="21"
                                      href="#/stat/work"
                            />,
                            <ListItem primaryText="累计企业家"
                                      value="/company/work"
                                      key="22"
                                      href="#/company/work"
                            />,
                            <ListItem primaryText="累计用户数"
                                      value="/user/work"
                                      key="23"
                                      href="#/user/work"
                            />,
                            <ListItem primaryText="总内容生产量"
                                      value="/content/work"
                                      key="24"
                                      href="#/content/work"
                            />
                        ]}
                    />
                    <ListItem
                        primaryText="计划"
                        value="/comment"
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem primaryText="基本统计"
                                      value="/stat/plan"
                                      key="25"
                                      href="#/stat/plan"
                            />,
                            <ListItem primaryText="累计企业家"
                                      value="/company/plan"
                                      key="26"
                                      href="#/company/plan"
                            />,
                            <ListItem primaryText="累计用户数"
                                      value="/user/plan"
                                      key="27"
                                      href="#/user/plan"
                            />,
                            <ListItem primaryText="总内容生产量"
                                      value="/content/plan"
                                      key="28"
                                      href="#/content/plan"
                            />
                        ]}
                    />
                </SelectableList>
            </Drawer>
        );
    }
}

export default AppNavDrawer;
