import React from 'react';
import HomePage from './pages/HomePage';

import { SocketProvider } from './context/SocketContext';

const App = () => {
  console.log('app');
  return (
    <SocketProvider>
      <HomePage />
    </SocketProvider>
  );
};

export default App;
