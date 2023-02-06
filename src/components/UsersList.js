import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, fetchUsers } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import useThunk from "../hooks/useThunk";
import UsersListItem from "./UsersListItem";

const UsersList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doAddUser, isLoadingAddUser, loadingAddUserError] = useThunk(addUser);

  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleAddUser = () => {
    doAddUser();
  };

  let content;
  if (loadingUsersError) {
    content = <div>Error fetching data: {loadingUsersError.message}</div>;
  } else if (isLoadingUsers) {
    content = <Skeleton boxes={6} className={"h-10 w-full"} />;
  } else {
    content = data.map((user) => <UsersListItem key={user.id} user={user} />);
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isLoadingAddUser} onClick={handleAddUser}>
          + Add User
        </Button>
      </div>
      {content}
    </div>
  );
};
export default UsersList;
