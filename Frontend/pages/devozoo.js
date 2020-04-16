import { Card, Collapse, Tooltip, Button} from 'antd';
import React, { useEffect, useState } from 'react';
import dataFetch from "../utils/dataFetch";
import Base from '../components/base';
import Loading from '../components/loading';

const { Panel } = Collapse;


const DevozooPage = () => {
    const [isQueried, setQueried] = useState(false);
    const [isLoaded, setLoaded] = useState(false);
    const [data, setData] = useState(false);

    const query = `{
        listByCategory
        {
            name
            description
            datasets{
                name
                description
                link
            }
        }
    }
    `
    const getDatasetsList = async () => await dataFetch({query});

    useEffect(() => {
        if(!isQueried) {
            getDatasetsList().then((response) =>{
                setQueried(true);
                if (!Object.prototype.hasOwnProperty.call(response, 'errors')) {
                    setData(response.data.listByCategory);
                    setLoaded(true);
                }
            })
        }
    });

    const renderCategories = () =>(
        data.map( c => (
            <Panel header={c.name}>
            <p> {c.description}</p>
            <div className="container d-flex justify-content-center align-items-center">
                {renderDatasets(c.datasets)}
               
            </div>
        </Panel>
        ))
    );
    
    const renderDatasets = (datasets) =>(
        datasets.map( d =>(
            <div className="px-2" >
                <Tooltip placement="bottom" title={d.description}>
                    <Button href={d.link} target="_blank" style={{minWidth:100}}>{d.name}</Button>
                </Tooltip>
             </div>
        ))
    );

    return isLoaded ? (
        <Base loginRequired>
            <h5>DevoZoo</h5>
            <Card style={{ width: '100%', minHeight:'70vh'}}>
                <p>Datasets by species and/or model system!</p>
                <Collapse expandIconPosition={'right'}>
                    {renderCategories()}
                </Collapse>
            </Card>
        </Base>
    ) : <Loading text={ "We are opening the page. Please wait"}/>
};

export default DevozooPage;