import { useSelector } from 'react-redux';
import Alert from './common/customPrompts/alert';
import Choices from './common/customPrompts/choices';
import Navbar from './features/Navbar';
import FolderViewPage from './pages/FolderViewPage';
import styles from './styles.module.scss';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import StoreStateTypeDef from './setup/store/types/storeStateTypeDef';
import { useEffect } from 'react';
import PlaylistsPage from './pages/PlaylistsPage';
import SettingsPage from './pages/SettingsPage';

const App = () => {
  return (
    <BrowserRouter>
      <SwitchToRememberedRoute />
    </BrowserRouter>
  );
};

export default App;

const SwitchToRememberedRoute = () => {
  const rememberedRoute = useSelector(
    (state: StoreStateTypeDef) => state.viewPageUrl
  );
  const navigate = useNavigate();

  useEffect(() => {
    navigate(rememberedRoute);
  }, []);

  return (
    <div className={styles.wrapper}>
      <Alert />
      <Choices />
      <Navbar />
      <Routes>
        <Route path="/index.html" element={<FolderViewPage />} />
        <Route path="/index.html/playlists" element={<PlaylistsPage />} />
        <Route path="/index.html/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
};
