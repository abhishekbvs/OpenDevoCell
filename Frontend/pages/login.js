import React, { useState, useEffect } from 'react'
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';
import { GoogleLogin } from 'react-google-login';
import TopNav from '../components/topNav';
import Footer from '../components/footer';
import Loading from '../components/loading';
import '../styles/login.sass'
import '../styles/bootstrap.sass'

import dataFetch from "../utils/dataFetch"

import { Layout } from 'antd';

const { Content } = Layout;
const cookies = new Cookies()

function LoginPage(props) {

    const router = useRouter();
    const [url, setURL] = useState();
    const [isLoading, setLoading] = useState(false);
    const [authFail, setAuthFail] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [isQueried, setQueried] = useState(false);
    const [isLoaded, setLoaded] = useState(false);
    const [status, setStatus] = useState(false);

    const query = `{
      status
      {
        googleSignIn
      }
    }`;

    const getStatus = async () => await dataFetch({ query });
    
    const GAuthLogin = `mutation googleLogin($accessToken: String!){
      socialAuth(accessToken: $accessToken, provider: "google-oauth2")
        {
          token
          user
          {
            username
          }
        }
    }`;

    useEffect(() => {
        setURL(window.location.href);
        const token = cookies.get('token');
        if (token != null) {
            router.push('/');
        }
        else if(!isQueried)
        {
            getStatus().then(  response => {
                setQueried(true);
                if (!Object.prototype.hasOwnProperty.call(response, 'errors')) {
                    setStatus(response.data.status);
                    setLoaded(true);
                }
            })
        }
    });

    const Login = async (query, variables) => await dataFetch({ query, variables });

    const loginWithGoogle = e => {
      const variables = { accessToken: e.accessToken };
      Login(GAuthLogin, variables).then( response => {
          if (!Object.prototype.hasOwnProperty.call(response, 'errors')) {
              cookies.set('token', response.data.socialAuth.token, { path: '/' });
              cookies.set('username', response.data.socialAuth.user.username, { path: '/' });
              router.push('/');
          } else {
              setAuthFail(true);
              setErrorMessage('Login has failed');
              setLoading(false);
          }
      });
  };

  const SSOCards = (<React.Fragment>
    <div>
            {
                status.googleSignIn ? (
                    <GoogleLogin
                        clientId="762421344167-8q93vtrpbeobiabt7nn7krjtippivnvf.apps.googleusercontent.com"
                        onSuccess={loginWithGoogle}
                        icon={true}
                        cookiePolicy={'single_host_origin'}
                        className="login-button-google"
                        children={<div>Login with Google</div>}
                    />
                ) : null
            }
        </div>
  
  </React.Fragment>);

  return !isLoading && isLoaded ? (
    <React.Fragment>
       <Layout style= {{ minHeight: "100vh" }}>
        <TopNav/>
        <Content>
          <div className="d-flex align-items-center justify-content-center">
            {SSOCards}
          </div>
        </Content>
        <Footer/>
        </Layout>
    </React.Fragment>
  ): <Loading/>
}

export default LoginPage;