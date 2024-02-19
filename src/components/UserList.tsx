import { useState, useEffect, ChangeEvent, FC } from "react";

import UserApiService from "../utils/UserApiService";
import IUserData from '../types/IUserData';
import Table from "./Table";

const UserList: FC = () => {
    const [users, setUsers] = useState<Array<IUserData>>([]);
    const [filter, setFilter] = useState<string>("");
    const [total, setTotal] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        retrieveUsers();
    }, []);

    const retrieveUsers = async () => {
        setLoading(true)
        await UserApiService.getUsersPerPage(100, 0)
            .then((response: any) => {
                console.log({ resp: response.data });
                setUsers(response.data.users);
                setTotal(response.data.total);
                // set error empty
            })
            .catch((e: Error) => {
                // set error message
                console.log(e);
            }).finally(() => {
                setLoading(false);
            }
            )
    };

    const columns = [
        { title: 'ID', prop: 'id' ,isSortable: true,
      isFilterable: true},
        { title: 'Name', prop: 'firstName' ,isSortable: true,
      isFilterable: true},
        { title: 'Last Name', prop: 'lastName' ,isSortable: true,
      isFilterable: true},
        { title: 'Email', prop: 'email' ,isSortable: true,
      isFilterable: true},
        { title: 'Address', prop: 'address.address' ,
      isFilterable: true},
        { title: 'City', prop: 'address.city' ,isSortable: true,
      isFilterable: true},
        { title: 'State', prop: 'address.state' ,isSortable: true,
      isFilterable: true},
    ];

    return (
        <div className="container">
            { loading ? <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            :
             <Table columns={columns} data={users} />}
        </div>
    );
};

export default UserList;