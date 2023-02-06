import useThunk from "../hooks/useThunk";
import { removeUser } from "../store";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";

export default function UsersListItem({ user }) {
  const [doRemoveUser, isRemovingUser, removeUserError] = useThunk(removeUser);

  let handleRemoveUser = () => {
    doRemoveUser(user);
  };

  return (
    <div key={user.id} className="mb-2 border rounded">
      <div className="flex p-2 gap-3 items-center cursor-pointer">
        <Button onClick={handleRemoveUser} loading={isRemovingUser}>
          <GoTrashcan />
        </Button>
        {removeUserError && <div>Error deleting user</div>}
        {user.name}
      </div>
    </div>
  );
}
