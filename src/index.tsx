import './styles/main.scss';
import * as React from 'react';
import { render } from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
// import { CodeSplitProvider, rehydrateState } from 'code-split-component';

import App from './components/App';
import AppState from './stores/AppState';
// import ReactHotLoader from './components/ReactHotLoader';

declare var module: any;

const appState = new AppState();

const container = document.getElementById('root');

const renderApp = (TheApp) =>
    render(
        <TheApp store={appState} />,
        container
    );

renderApp(App);
