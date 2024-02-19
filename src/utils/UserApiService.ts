import http from "../http-common";
import IUserData from "../types/IUserData";

const get = (id: any) => {
    return http.get<IUserData>(`/users/${id}`);
};

// for pagination
const getUsersPerPage = (page: number, limit: number) => {
    return http.get<Array<IUserData>>(`/users?limit=${limit}&skip=${(page - 1) * limit}`);
}

const UserApiService = {
    get,
    getUsersPerPage
};

export default UserApiService;