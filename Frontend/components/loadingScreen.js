import React from "react";
import '../styles/loadingscreen.sass';
import Link from "next/link";

const LoadingScreen = () => {
    return (
        <React.Fragment>
            <Link href="/">
                <a><div className="btn btn-light btn-shadow px-4 m-2 py-2">Home</div></a>
            </Link>
        </React.Fragment>
    ) 
};

export default LoadingScreen;