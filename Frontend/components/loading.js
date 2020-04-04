import ReactLoading from 'react-loading';

const loading = () =>{
    return(
        <div className="loading">
            <ReactLoading type={"spinningBubbles"} color={"#00000"} height={'5%'} width={'5%'} />
        </div>
    )
};

export default loading;

