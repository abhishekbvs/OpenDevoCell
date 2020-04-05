import Link from "next/link";
import { Layout, Menu } from 'antd';
import { LogoutOutlined,DashboardOutlined, UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;

const SideNav = () =>{
    return(
        <React.Fragment>
            <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
           
              <Menu.Item key="4">
                <DashboardOutlined />
                <Link href={'/'}>Dashboard</Link> 
              </Menu.Item>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <LaptopOutlined />
                    DevoZoo
                  </span>
                }
              >
                <Menu.Item key="5">SPIM Microsopy data</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <NotificationOutlined />
                  Documentation
                </span>
                }
              >
                <Menu.Item key="9">Tutorials</Menu.Item>
                <Menu.Item key="10">Developer Docs</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <UserOutlined />
                    Account
                </span>
                }
              >
                <Menu.Item key="1">
                  <Link href={'/'}>Update Profile</Link> 
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="4">
                <LogoutOutlined />
                <Link href={'/logout'}>
                  Logout
                </Link>
            </Menu.Item>
            </Menu>
          </Sider>
        </React.Fragment>
    )
};

export default SideNav;