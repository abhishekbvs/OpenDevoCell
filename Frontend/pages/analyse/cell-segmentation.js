import { Card,Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import dataFetch from "../../utils/dataFetch";
import fileUpload from "../../utils/fileUpload";
import Link from "next/link";
import Base from '../../components/base';
import Loading from '../../components/loading';
import { SelectOutlined, UploadOutlined} from '@ant-design/icons';

const { TabPane } = Tabs;
const UpdateProfilePage = () => {
    const [isLoading, setLoaded] = useState(true);

    return isLoading ? (
        <Base loginRequired>
            <React.Fragment>
            <Card style={{ width: '100%', minHeight:'70vh'}}>
                <Tabs defaultActiveKey="1" onChange={''}>
                    <TabPane tab={<span><SelectOutlined/>Select Videos</span>} key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab={<span><UploadOutlined/>Upload Video</span>} key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab={<span><UploadOutlined/>Upload Images</span>} key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </Card> 
            </React.Fragment>
        </Base>
    ) : <Loading text={ "We are opening the page. Please wait"}/>
};

export default UpdateProfilePage;