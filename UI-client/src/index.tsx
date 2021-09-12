import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RootStateProvider } from "./rootStateContext";
import MainView from "./components/mainView";
import theme from "./materialUITheme";
import { ThemeProvider } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <RootStateProvider>
    <ThemeProvider theme={theme}>
     <MainView />
    </ThemeProvider>
    </RootStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

