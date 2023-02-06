import {
  useAddAlbumMutation,
  useDeleteAlbumMutation,
  useFetchAlbumsQuery,
} from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import * as PropTypes from "prop-types";
import { AlbumsListItem } from "./AlbumsListItem";

AlbumsListItem.propTypes = { album: PropTypes.any };
export default function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, addResults] = useAddAlbumMutation();
  const [deleteAlbum, deleteResults] = useDeleteAlbumMutation();

  let content;
  if (isFetching) {
    content = (
      <Skeleton boxes={data ? data.length + 1 : 3} className="h-10 w-full" />
    );
  } else if (error) {
    content = <div>Error: {error.message}</div>;
  } else if (data) {
    content = data.map((album) => (
      <AlbumsListItem key={album.id} album={album} />
    ));
  }

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h2 className=" font-bold">Albums for {user.name}</h2>
        <Button loading={addResults.isLoading} onClick={handleAddAlbum}>
          + Add Album
        </Button>
      </div>
      {content}
    </div>
  );
}
