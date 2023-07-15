import React from 'react';
import AlertStateTypeDef from './alertStateTypeDef';
import ChoicesStateTypeDef from './choicesStateTypeDef';

type ContextTypeDef = {
  folderPlayerAudioPath: string;
  setFolderPlayerAudioPath: React.Dispatch<React.SetStateAction<string>>;
  folderPlayerLoading: boolean;
  setFolderPlayerLoading: React.Dispatch<React.SetStateAction<boolean>>;
  alertState: AlertStateTypeDef;
  setAlertState: React.Dispatch<React.SetStateAction<AlertStateTypeDef>>;
  choicesState: ChoicesStateTypeDef;
  setChoicesState: React.Dispatch<React.SetStateAction<ChoicesStateTypeDef>>;
};

export default ContextTypeDef;
