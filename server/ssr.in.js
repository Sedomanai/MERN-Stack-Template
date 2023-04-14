import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/App.js';

export const AppString = () => { return ReactDOMServer.renderToString(<App/>) };