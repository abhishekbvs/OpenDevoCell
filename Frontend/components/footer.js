import { Layout } from 'antd';
const { Footer} = Layout;

const footer = () =>{
    return(
        <Footer>
            <div className="d-flex align-items-center justify-content-center">
            <   h6>Powered by Google Summer of Code, INCF and OpenWorm</h6>
            </div>
            
        </Footer>
    )
};

export default footer;