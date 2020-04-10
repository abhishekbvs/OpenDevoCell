import { Card, Tabs, Upload, Modal, message } from 'antd';
import React, { useEffect, useState } from 'react';
import dataFetch from "../../utils/dataFetch";
import fileUpload from "../../utils/fileUpload";
import Link from "next/link";
import Base from '../../components/base';
import Loading from '../../components/loading';
import InputDataBox from '../../components/inputDataBox';
import { SelectOutlined, UploadOutlined, InboxOutlined} from '@ant-design/icons';

const { TabPane } = Tabs;
const { Dragger } = Upload;

const UpdateProfilePage = () => {
    const [isLoading, setLoaded] = useState(true);

    return isLoading ? (
        <Base loginRequired>
            <InputDataBox/>
        </Base>
    ) : <Loading text={ "We are opening the page. Please wait"}/>
};

export default UpdateProfilePage;