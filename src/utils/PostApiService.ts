import http from "../http-common";
import IUserPostData from "../types/IUserPostData";


const getAllPostsOfUser = (userid: any) => {
    return http.get<Array<IUserPostData>>(`/posts/user/${userid}`);
}

const PostApiService = {
    getAllPostsOfUser
};

export default PostApiService;