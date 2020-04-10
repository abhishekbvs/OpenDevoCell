import { Card, Tabs, Upload, Button, Modal, message, Footer } from 'antd';
import React, { useEffect, useState } from 'react';
import dataFetch from "../utils/dataFetch";
import fileUpload from "../utils/fileUpload";
import Link from "next/link";
import { SelectOutlined, UploadOutlined, InboxOutlined} from '@ant-design/icons';

const { TabPane } = Tabs;
const { Dragger } = Upload;

const InputDataBox = ({draggerProps, editButtonProps}) => {


    return (
        <React.Fragment>
        <Card style={{ width: '100%', minHeight:'70vh'}}>
            <Tabs defaultActiveKey="1" onChange={''} style={{  minHeight:'60vh'}}>
                <TabPane tab={<span><SelectOutlined/>Select Video</span>} key="1">
                    Select a video from the available DevoZoo videos

                </TabPane>
                <TabPane tab={<span><UploadOutlined/>Upload Video</span>} key="2">
                    <div className="container-fluid">
                        Upload a video from the file system
                        <div className="pt-4">
                            <Dragger {...draggerProps}>
                                <p className="ant-upload-drag-icon"> <InboxOutlined /> </p>
                                <p className="ant-upload-text">Click or drag video to this area to upload</p>
                                <p className="ant-upload-hint">
                                    Support for a single video upload. Strictly prohibit from uploading band files
                                </p>
                            </Dragger>
                        </div>
                    </div>
                </TabPane>
                <TabPane tab={<span><UploadOutlined/>Upload Images</span>} key="3">
                    Upload multiple images of same size from the file system
                </TabPane>
            </Tabs>
            <div className="pt-4">
                <Button {...editButtonProps}>
                        Edit Video
                </Button>
            </div>
           
    
        </Card> 
        </React.Fragment>
    );
};

export default InputDataBox;