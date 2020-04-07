import React, {useEffect, useState} from 'react';
import dataFetch from "../../utils/dataFetch";
import Cookies from "universal-cookie";
import Link from "next/link";
import Base from '../../components/base';

const cookies = new Cookies();

const UpdateProfilePage = () => {
    const [isLoading, setLoaded] = useState(false);
    const [queried, setQueried] = useState(false);
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");

    const query = `
        query user($username: String!){
    user(username:$username){
        username
        firstName
        lastName
        email
        profile{
        profilePic
        phone
        telegramID
        about
        roll
        batch
        githubUsername
        }
    }
    }
    `;

    const updateProfileQuery = `
        mutation ($about: String!, $batch: Int!, $email: String!, $firstName: String!, $githubUsername: String!, $lastName: String!, $phoneNo: String!, $roll: String!, $telegram: String!, $username: String!){
    UpdateProfile(about: $about, batch: $batch, email: $email, firstName: $firstName, githubUsername: $githubUsername, lastName:$lastName, phoneNo:$phoneNo, roll: $roll, telegramID: $telegram,username: $username){
        id
    }
    }
    `;

    const fetchData = async variables =>
    dataFetch({ query, variables });

    const submitForm = async variables =>
    dataFetch({ query: updateProfileQuery, variables });

    const uploadFile = async data => await fileUpload(data);

    useEffect(() => {
    if(!queried){
        const usernameCookie = cookies.get('username');
        const variables = { username: usernameCookie };
        fetchData(variables).then(r=>{
        if (!Object.prototype.hasOwnProperty.call(r, "errors")) {
            setUsername(r.data.user.username ? r.data.user.username: "" );
            setFirstName(r.data.user.firstName ? r.data.user.firstName : "");
            setLastName(r.data.user.lastName ? r.data.user.lastName : "");
            setEmail(r.data.user.email ? r.data.user.email : "");
            setPhoneNo(r.data.user.profile.phone ? r.data.user.profile.phone : "");
            setProfilePic(r.data.user.profile.profilePic ? r.data.user.profile.profilePic : "");
            setLoaded(true);
        }
        });
        setQueried(true);
    }
    });

    const updateProfile = () => {
        const variables = {username, firstName, lastName, email, telegram, roll, about, githubUsername, batch, phoneNo};
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
            UpdateProfilePic{
            fileName
            } 
        }`;
            data.append('query', query);
            uploadFile({data}).then((response) => (
            setProfilePic(response.data.UpdateProfilePic.fileName)
            ));
        }
    };


    return (
        <Base loginRequired>     
        Update Profile
        </Base>
    )
};

export default UpdateProfilePage;