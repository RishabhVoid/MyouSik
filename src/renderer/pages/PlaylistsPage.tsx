import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setViewPageUrl } from 'renderer/setup/store/actions';
import PlaylistManager from 'renderer/layouts/PlaylistManager';

const PlaylistsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setViewPageUrl('/index.html/playlists'));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
      }}
    >
      <PlaylistManager />
    </div>
  );
};

export default PlaylistsPage;
