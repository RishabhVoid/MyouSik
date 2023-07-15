import AllAudioDraggableList from 'renderer/features/AllAudioDraggableList';
import PlaylistsEditor from 'renderer/features/PlaylistsEditor';

const PlaylistManager = () => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        padding: '1rem',
        display: 'flex',
      }}
    >
      <AllAudioDraggableList />
      <PlaylistsEditor />
    </div>
  );
};

export default PlaylistManager;
