import React, { useState, useContext } from 'react';

import { SocketContext } from '../context/SocketContext';
const AddBand = () => {
  const [name, setName] = useState('');
  const { socket } = useContext(SocketContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    socket.emit('add-band', name);
    setName('');
  };
  return (
    <>
      <h3>Add Band</h3>
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default AddBand;
