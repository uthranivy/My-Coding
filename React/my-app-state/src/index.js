import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyClock from './MyClock';
import reportWebVitals from './reportWebVitals';

function myTick(){
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <MyClock />
    </React.StrictMode>
  );
}


setInterval(myTick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();