import { Layout,Menu } from 'antd';
const { Header} = Layout;

const TopNav = () =>{
    return(
        <React.Fragment>
            <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="2">Name</Menu.Item>
                <Menu.Item key="3">Log Out</Menu.Item>
            </Menu>
            </Header>
        </React.Fragment>
    )
};

export default TopNav;