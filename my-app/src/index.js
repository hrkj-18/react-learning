import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { debounce } from "lodash";
import {appConfig, stage} from "./config";

if (appConfig.sentryDsn) {
  const userFeedbackDialog = debounce( eventId => {Sentry.showReportDialog({eventId: eventId})}, 3000);
  Sentry.init({
    dsn: appConfig.sentryDsn,
    environment: stage,
    beforeSend(event) {
      // Check if it is an exception, and if so, show the report dialog
      if (event.exception) {
          userFeedbackDialog(event.event_id);
      }
      return event;
  },
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
