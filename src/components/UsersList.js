import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, fetchUsers } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import useThunk from "../hooks/useThunk";

const UsersList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doAddUser, isLoadingAddUser, loadingAddUserError] = useThunk(addUser);
  useDispatch();

  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleAddUser = () => {
    doAddUser();
  };

  if (loadingUsersError !== null) {
    return <div>Error fetching data: {loadingUsersError.message}</div>;
  }

  let renderedUsers;
  if (isLoadingUsers) {
    renderedUsers = <Skeleton boxes={6} className={"h-10 w-full"} />;
  } else {
    renderedUsers = data.map((user) => (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    ));
  }

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isLoadingAddUser} onClick={handleAddUser}>
          + Add User
        </Button>
      </div>
      {renderedUsers}
    </div>
  );
};
export default UsersList;
