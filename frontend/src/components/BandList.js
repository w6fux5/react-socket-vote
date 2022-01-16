import React, { useState, useEffect, useContext } from 'react';

import { SocketContext } from '../context/SocketContext';

const BandList = () => {
  const [bands, setBands] = useState([]);

  const { socket } = useContext(SocketContext);

  useEffect(() => {
    if (!socket) return;
    socket.on('current-bands', (bands) => {
      setBands(bands);
    });

    return () => socket.off('current-bands');
  }, [socket]);

  const onChangeHandler = (e, id) => {
    const newName = e.target.value;
    const upDateBand = bands.map((band) => {
      if (band.id === id) {
        band.name = newName;
      }
      return band;
    });

    setBands(upDateBand);
  };

  const onBlurHandler = (id, name) => {
    socket.emit('change-name', { id, name });
  };

  const votesHandler = (id) => {
    socket.emit('votes-band', id);
  };

  const deleteBandHandler = (id) => {
    socket.emit('delete-band', id);
  };

  const createRows = () =>
    bands.map((band) => (
      <tr key={band.id}>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => votesHandler(band.id)}
          >
            +1
          </button>
        </td>

        <td>
          <input
            type="text"
            className="form-control"
            value={band.name}
            onChange={(e) => onChangeHandler(e, band.id)}
            onBlur={() => onBlurHandler(band.id, band.name)}
          />
        </td>

        <td>
          <h3>{band.votes}</h3>
        </td>

        <td>
          <button
            onClick={() => deleteBandHandler(band.id)}
            className="btn btn-danger"
          >
            remove
          </button>
        </td>
      </tr>
    ));

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th></th>
            <th>name</th>
            <th>votes</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>{createRows()}</tbody>
      </table>
    </>
  );
};

export default BandList;
