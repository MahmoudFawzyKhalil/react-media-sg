import useThunk from "../hooks/useThunk";
import { removeUser } from "../store";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

export default function UsersListItem({ user }) {
  const [doRemoveUser, isRemovingUser, removeUserError] = useThunk(removeUser);

  let handleRemoveUser = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button
        className="mr-3"
        onClick={handleRemoveUser}
        loading={isRemovingUser}
      >
        <GoTrashcan />
      </Button>
      {removeUserError && <div>Error deleting user</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}
