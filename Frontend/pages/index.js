import Link from 'next/link';
import Head from '../components/head';
import TopNav from '../components/topNav';
import SideNav from '../components/sideNav';

import { Layout, Menu, Breadcrumb } from 'antd';

import 'antd/dist/antd.css'
import '../styles/homepage.sass';

const { Footer, Content } = Layout;

const HomePage = () => {
  return (
    <React.Fragment>
      <Head title="OpenDevoCell" />
      <Layout style={{ minHeight: "100vh" }}>
        <TopNav/>
        <Layout>
          <SideNav/>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
              }}
            >
              Content
          </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    </React.Fragment>
  )
};

export default HomePage;