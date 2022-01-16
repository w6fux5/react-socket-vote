import React, { useContext } from 'react';

import { SocketContext } from '../context/SocketContext';

import AddBand from '../components/AddBand';
import BandList from '../components/BandList';
import BandChart from '../components/BandChart';

const HomePage = () => {
  const { online } = useContext(SocketContext);
  console.log('home', online);

  return (
    <div className="container">
      <div className="alert">
        <p>
          Status:
          {online ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </p>
      </div>

      <h1>Band Names</h1>
      <hr />
      <div className="row">
        <div className="col">
          <BandChart />
        </div>
      </div>

      <div className="row">
        <div className="col-8">
          <BandList />
        </div>

        <div className="col-4">
          <AddBand />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
