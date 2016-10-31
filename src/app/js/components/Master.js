import React, {Component, PropTypes} from "react";
import Title from "react-title-component";
import AppBar from "../../../../node_modules/material-ui/AppBar";
import spacing from "../../../../node_modules/material-ui/styles/spacing";
import {darkWhite, lightWhite, grey900} from "../../../../node_modules/material-ui/styles/colors";
import AppNavDrawer from "./AppNavDrawer";
import withWidth, {MEDIUM, LARGE} from "../../../../node_modules/material-ui/utils/withWidth";

class Master extends Component {
    static propTypes = {
        children: PropTypes.node,
        location: PropTypes.object,
        width: PropTypes.number.isRequired,
    };

    static contextTypes = {
        router: PropTypes.object.isRequired,
    };

    state = {
        navDrawerOpen: true,
    };

    componentDidMount() {
        $('.app-bar').find('button').addClass('app-bar-btn');
    }

    getStyles() {
        const styles = {
            appBar: {
                position: 'fixed',
                top: 0,
            },
            root: {
                paddingTop: spacing.desktopKeylineIncrement,
                minHeight: 400,
                transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
            },
            content: {
                margin: spacing.desktopGutter,
            },
            contentWhenMedium: {
                margin: `${spacing.desktopGutter * 2}px ${spacing.desktopGutter * 3}px`,
            },
            footer: {
                backgroundColor: grey900,
                textAlign: 'center',
            },
            a: {
                color: darkWhite,
            },
            p: {
                margin: '0 auto',
                padding: 0,
                color: lightWhite,
                maxWidth: 356,
            },
            browserstack: {
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                margin: '25px 15px 0',
                padding: 0,
                color: lightWhite,
                lineHeight: '25px',
                fontSize: 12,
            },
            browserstackLogo: {
                margin: '0 3px',
            },
            iconButton: {
                color: darkWhite,
            },
        };

        if (this.props.width === MEDIUM || this.props.width === LARGE) {
            styles.content = Object.assign(styles.content, styles.contentWhenMedium);
        }

        return styles;
    }

    handleTouchTapLeftIconButton = () => {
        this.setState({
            navDrawerOpen: !this.state.navDrawerOpen,
        });
    };

    handleChangeRequestNavDrawer = (open) => {
        console.log(open);
    };

    handleChangeList = (event, value) => {
        this.context.router.push(value);
    };

    render() {
        const {
            location,
            children,
        } = this.props;

        let {
            navDrawerOpen,
        } = this.state;

        const router = this.context.router;
        const styles = this.getStyles();

        let docked = false;
        let showMenuIconButton = true;

        if (this.state.navDrawerOpen) {
            styles.appBar.paddingLeft = 290;
            styles.root.paddingLeft = 256;
            styles.footer.paddingLeft = 256;
            docked = true;
        }

        return (
            <div>
                <Title render="统计"/>
                <AppBar
                    onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
                    zDepth={0}
                    style={styles.appBar}
                    showMenuIconButton={showMenuIconButton}
                    className="app-bar"
                />
                {
                    <div style={styles.root}>
                        <div className="">
                            {React.cloneElement(children, {
                                onChangeMuiTheme: this.handleChangeMuiTheme,
                            })}
                        </div>
                    </div>
                }
                <AppNavDrawer
                    style={styles.navDrawer}
                    location={location}
                    docked={docked}
                    onRequestChangeNavDrawer={this.handleChangeRequestNavDrawer}
                    onChangeList={this.handleChangeList}
                    open={navDrawerOpen}
                />
            </div>
        );
    }
}

export default withWidth()(Master);
