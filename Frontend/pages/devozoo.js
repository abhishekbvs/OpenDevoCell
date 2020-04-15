import { Card, Tabs, Upload, Modal, message } from 'antd';
import React, { useEffect, useState } from 'react';
import dataFetch from "../utils/dataFetch";
import fileUpload from "../utils/fileUpload";
import Link from "next/link";
import Base from '../components/base';
import Loading from '../components/loading';
import InputDataBox from '../components/inputDataBox';
import { SelectOutlined, UploadOutlined, InboxOutlined} from '@ant-design/icons';

const { TabPane } = Tabs;
const { Dragger } = Upload;

const DevozooPage = () => {
    const [isLoading, setLoaded] = useState(true);

    return isLoading ? (
        <Base loginRequired>
            <h5>DevoZoo</h5>
            <Card style={{ width: '100%', minHeight:'70vh'}}>
                <p>Datasets by species and/or model system!</p>
            </Card>
        </Base>
    ) : <Loading text={ "We are opening the page. Please wait"}/>
};

export default DevozooPage;