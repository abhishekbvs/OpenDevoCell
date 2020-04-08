import React, {useEffect, useState} from 'react';
import dataFetch from "../../utils/dataFetch";
import Cookies from "universal-cookie";
import Link from "next/link";
import Base from '../../components/base';
import {Upload, Button, Result} from "antd";
import { UploadOutlined } from '@ant-design/icons';

const cookies = new Cookies();

const UpdateProfilePage = () => {
    const [isLoading, setLoaded] = useState(false);
    const [isQueried, setQueried] = useState(false);
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [dataLoading, setDataLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setErrorText] = useState("");
    // const [data, setData] = useState(false);

    const query = `
        query {
        myProfile{
            username
            firstName
            lastName
            email
            profilePic
            phone
        }
    }
    `;

    const updateProfileQuery = `
        mutation ($firstName: String!, $lastName: String!, $phoneNo: String!){
    updateProfile(firstName: $firstName, lastName:$lastName, phone:$phoneNo){
        status
    }
    }
    `;

    const getProfile = async () => await dataFetch({query});
    
    const submitForm = async variables =>
    dataFetch({ query: updateProfileQuery, variables });

    const uploadFile = async data => await fileUpload(data);

    useEffect(() => {
        if(!isQueried){
            getProfile().then(  response => {
                setQueried(true);
                if (!Object.prototype.hasOwnProperty.call(response, 'errors')) {
                    setUsername(response.data.myProfile.username ? response.data.myProfile.username: "" );
                    setFirstName(response.data.myProfile.firstName ? response.data.myProfile.firstName : "");
                    setLastName(response.data.myProfile.lastName ? response.data.myProfile.lastName : "");
                    setEmail(response.data.myProfile.email ? response.data.myProfile.email : "");
                    setPhoneNo(response.data.myProfile.phone ? response.data.myProfile.phone : "");
                    setProfilePic(response.data.myProfile.profilePic ? response.data.myProfile.profilePic : "");
                    // setData(response.data);
                    setLoaded(true);
                }
            })
        }
    });

    const updateProfile = () => {
        const variables = {username, firstName, lastName, email, phoneNo};
        submitForm(variables).then(r=>{
          if (Object.prototype.hasOwnProperty.call(r, "errors")) {
            setErrorText(r.errors[0].message)
          } else {
            setSuccess(r.data);
            setErrorText("");
          }
        })
      };
    
    const uploadProps = {
        name: "file",
        multiple: false,
        showUploadList: false,
        customRequest: ({file}) => {
            const data = new FormData();
            data.append('imageFile', file);
            const query = `mutation{
            updateProfilePic{
            fileName
            } 
        }`;
            data.append('query', query);
            uploadFile({data}).then((response) => (
            setProfilePic(response.data.UpdateProfilePic.fileName)
            ));
        }
    };


    return isLoading ? (
        <Base loginRequired>     
          <React.Fragment>
            <h5>Update Profile</h5>
            <form
                className="form-group"
                onSubmit={e => {
                setDataLoading(true);
                updateProfile();
                e.preventDefault();
                }}>
                {!dataLoading ?
                <React.Fragment>
                    <div className="row mt-4">
                    <div className="col-md-6">
                        <label>Username</label>
                        <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={e=> setUsername(e.target.value)}
                        className="form-control"
                        />
                    </div>
                    <div className="col-md-3">
                        <img alt="profilepic" src={profilePic} style={{height: '30vh'}} className="p-2" />
                        <Upload {...uploadProps} accept="image/*">
                        <Button>
                            <UploadOutlined/> 
                            Select File
                        </Button>
                        </Upload>
                    </div>
                    </div>
                    <div className="row mt-4">
                    <div className="col-md-6">
                        <label>First Name</label>
                        <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={e=> setFirstName(e.target.value)}
                        className="form-control"
                        />
                    </div>
                    <div className="col-md-6">
                        <label>Last Name</label>
                        <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={e=> setLastName(e.target.value)}
                        className="form-control"
                        />
                    </div>
                    </div>
                    <div className="row mt-4">
                    <div className="col-md-6">
                        <label>Email</label>
                        <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                        className="form-control"
                        />
                    </div>
                    <div className="col-md-6">
                        <label>Phone No</label>
                        <input
                        type="text"
                        placeholder="Phone No"
                        value={phoneNo}
                        onChange={e=> setPhoneNo(e.target.value)}
                        className="form-control"
                        />
                    </div>
                    </div>
                    
                   
                
                    <div className="row mt-4">
                    <label>About</label>
                    {/* <div className="col-md-12">
                        <ReactQuill
                        value={about}
                        onChange={e => setAbout(e)}
                        />
                    </div> */}
                    </div>
                    <div className="p-4" style={{float: 'right'}}>
                    <button
                        type="submit"
                        className="button btn ant-btn-primary"
                    >
                        Save
                    </button>
                    </div>
                </React.Fragment>
                :<div>
                    {
                    success!== '' ? (
                        <Result
                            status="success"
                            title="Successfully saved your details"
                            extra={<Link to="/"><Button type="primary">Back Home</Button></Link>}
                        />
                        )
                        : error!== '' ?
                        <div className="alert alert-danger m-4">{error}</div>:
                        <div className="alert alert-warning m-4">Submitting. Please Wait</div>
                    }
                </div>

                }
            </form>
            </React.Fragment>
        </Base>
    ):(
        <Base>
            Hello   
        </Base>
    )
};

export default UpdateProfilePage;