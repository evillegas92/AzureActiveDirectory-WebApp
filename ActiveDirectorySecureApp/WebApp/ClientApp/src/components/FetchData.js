import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllForecasts, fetchForecasts } from "./../redux/slices/forecastsSlice";

const ResultsTable = ({ forecasts }) => {
  return (
    <table className="table table-striped" aria-labelledby="tabelLabel">
      <thead>
        <tr>
          <th>Date</th>
          <th>Temp. (C)</th>
          <th>Temp. (F)</th>
          <th>Summary</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {forecasts.map((forecast) => (
          <tr key={forecast.date}>
            <td>{forecast.date}</td>
            <td>{forecast.temperatureC}</td>
            <td>{forecast.temperatureF}</td>
            <td>{forecast.summary}</td>
            <td><Link to={`/forecasts/${forecast.date}`} className="btn btn-secondary">View</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export const FetchData = () => {

  const dispatch = useDispatch();

  const forecasts = useSelector(selectAllForecasts);
  const forecastsStatus = useSelector(state => state.forecasts.status);
  const forecastsError = useSelector(state => state.forecasts.error);

  useEffect(() => {
    if (forecastsStatus === 'idle') {
      dispatch(fetchForecasts());
    }
  }, [forecastsStatus, dispatch]);

  let content;
  if (forecastsStatus === 'loading') {
    content = <span>Loading...</span>
  }
  else if (forecastsStatus === 'failed') {
    content = <span>{forecastsError}</span>
  }
  else if (forecastsStatus === 'succeeded') {
    content = <ResultsTable forecasts={forecasts}></ResultsTable>
  }

  return (
    <div>
      <div className="row">
        <div className="col">
          <h1 id="tabelLabel">Weather forecast</h1>
          <p>
            This component demonstrates fetching data from the server.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {content}
        </div>
      </div>
    </div>
  );
}
