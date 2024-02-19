import { useLocation } from 'react-router-dom';
import { useState, useEffect, FC } from "react";

import IUserData from "../types/IUserData";
import IUserPostData from "../types/IUserPostData";

import PostApiService from "../utils/PostApiService";
import UserApiService from "../utils/UserApiService";

/*
 * A component that displays the user's first name and last name, 
 * as well as each post that matches the user id ( like the user profile page ).
 */
const UserView: FC = () => {

    const location = useLocation();
    const { user } = location.state || {};

    const [currentUser, setCurrentUser] = useState<IUserData>();
    const [posts, setPosts] = useState<Array<IUserPostData>>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        getUserByID();
        getPostsOfUser()
    }, []);

    const getPostsOfUser = async () => {
        await PostApiService.getAllPostsOfUser(user.id)
            .then((response: any) => {
                setPosts(response.data.posts)
                console.log("Posts", response.data.posts);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }

    const getUserByID = async () => {
        setLoading(true)
        await UserApiService.get(user.id)
            .then((response: any) => {
                setCurrentUser(response.data)
                console.log("User", response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            }).finally(() => { 
                setLoading(false);
            }); 
    }

    return <div>
             { loading ? <div className="spinner-border" role="status">
             <span className="visually-hidden">Loading...</span>
        </div>
        :   
        <>
        <div className="href_button"><a href="/">back</a></div>

        <h2 className="title_name mt-3">{currentUser?.firstName + " " + currentUser?.lastName}</h2>
        <div className="section_content">
        { posts?.map( e => {
            // design postet
            return (
                <div className="div_content mt-3">
                    <h5 className="title_header">{e.title}</h5>
                    <p className="paragraph_text">{e.body}</p>
                    
                    <div className="tag_profile">
                        {e.tags.map( tag => {
                            return <div className=''>
                                <p className="paragraph_tag">{tag + " "}</p>
                            </div>
                        })}
                        
                    </div>       
                </div>
            )
        } ) }
        </div>
        </>
    }   
    </div>
}

export default UserView;
