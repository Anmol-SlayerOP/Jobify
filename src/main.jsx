import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx';
import './index.css';
import store from './redux/store.jsx'; // Import your configured store

// import AOS from 'aos';
// import 'aos/dist/aos.css';
//     AOS.init({ 
//       duration: 1500 });
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}> 
  <BrowserRouter>
    <App />
    <ToastContainer position="bottom-right"/>
    </BrowserRouter>
    </Provider>
  // </React.StrictMode>,
)
