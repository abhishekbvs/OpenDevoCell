import { Layout } from 'antd';
const { Footer} = Layout;

const footer = () =>{
    return(
        <Footer>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <span style={{ fontSize: "1.1em", fontWeight: 500 }}>Powered by 
                   <a href="https://summerofcode.withgoogle.com/"> Google Summer of Code</a>, 
                   <a href="https://www.incf.org/"> INCF</a> and 
                   <a href="http://openworm.org/"> OpenWorm Foundation</a>
                </span>
                <span style={{ fontSize: "1em", fontWeight: 500 }}>Developed by <strong><a href="https://devoworm.weebly.com/">DevoWorm Group</a></strong></span>
            </div>         
        </Footer>
    )
};

export default footer;