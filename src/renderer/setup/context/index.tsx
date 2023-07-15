import React, { createContext, useState, useMemo } from 'react';
import ContextTypeDef from './types/contextTypeDef';
import AlertStateTypeDef from './types/alertStateTypeDef';
import ChoicesStateTypeDef from './types/choicesStateTypeDef';

export const AppContext = createContext<ContextTypeDef>({
  alertState: {
    messages: [''],
  },
  setAlertState: () => {},
  folderPlayerLoading: false,
  setFolderPlayerLoading: () => {},
  choicesState: {
    callback(choice) {},
    message: '',
    choices: ['Yes', 'No'],
  },
  setChoicesState: () => {},
  folderPlayerAudioPath: '',
  setFolderPlayerAudioPath: () => {},
});

type props = {
  children: React.ReactNode;
};

const AppContextProvider = ({ children }: props) => {
  const [alertState, setAlertState] = useState<AlertStateTypeDef>({
    messages: [''],
  });

  const [choicesState, setChoicesState] = useState<ChoicesStateTypeDef>({
    choices: ['Yes', 'No'],
    callback(choice) {},
    message: '',
  });

  const [folderPlayerAudioPath, setFolderPlayerAudioPath] = useState('');
  const [folderPlayerLoading, setFolderPlayerLoading] = useState(false);

  const values = useMemo(() => {
    return {
      alertState,
      setAlertState,
      choicesState,
      setChoicesState,
      folderPlayerAudioPath,
      setFolderPlayerAudioPath,
      folderPlayerLoading,
      setFolderPlayerLoading,
    };
  }, [alertState, choicesState, folderPlayerAudioPath, folderPlayerLoading]);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
