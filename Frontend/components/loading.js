import ReactLoading from 'react-loading';

const loading = () =>{
    return(
        <React.Fragment>
            <div className="loading">
                <ReactLoading type={"spinningBubbles"} color={"#00000"} height={'5%'} width={'5%'} />
            </div>
        </React.Fragment>
    )
};

export default loading;

