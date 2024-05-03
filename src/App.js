import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import AppRoutes from './routes';
// import { UserDataProvider } from './providers/userdataprovider';
import {UserDataProvider} from '../src/providers/userdataprovider'

function App() {
  return (
    <div className="App">
        <UserDataProvider>
          <BrowserRouter>
              <AppRoutes/>
          </BrowserRouter>
        </UserDataProvider>
    </div>
  );
}

export default App;
