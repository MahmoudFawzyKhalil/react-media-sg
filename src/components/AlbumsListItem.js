import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { useDeleteAlbumMutation } from "../store";

export function AlbumsListItem({ album }) {
  const [deleteAlbum, deleteResults] = useDeleteAlbumMutation(album);

  const handleRemoveAlbum = () => {
    deleteAlbum(album);
  };
  const header = (
    <div className="flex gap-3">
      <Button loading={deleteResults.isLoading} onClick={handleRemoveAlbum}>
        <GoTrashcan></GoTrashcan>
      </Button>
      {album.title}
    </div>
  );
  return <ExpandablePanel header={header}>Photos</ExpandablePanel>;
}
