import { Layout,Menu } from 'antd';
const { Header} = Layout;

const TopNav = (loginRequired) =>{
    return loginRequired ? (
        <React.Fragment>
            <Header className="header">
                {/* <div className="logo" /> */}
                <span style={{ color: "white", fontSize: "3vh", fontWeight: 700 }}>OpenDevoCell</span>
                <Menu theme="dark" mode="horizontal" >
                        {/* <Menu.Item key="2" >Name</Menu.Item> */}
                </Menu>
            </Header>
        </React.Fragment>
    ):(
        <React.Fragment>
            <Header className="header">
                <span style={{ color: "white", fontSize: "3vh", fontWeight: 700 }}>OpenDevoCell</span>
                <Menu theme="dark" mode="horizontal" >
                </Menu>
            </Header>
        </React.Fragment>
    )
};

export default TopNav;