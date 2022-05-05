import React from "react";
import { Link } from 'react-router-dom';
import { useGetForecastsQuery } from "./../redux/slices/apiSlice";

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
          <tr key={forecast.id}>
            <td>{forecast.date}</td>
            <td>{forecast.temperatureC}</td>
            <td>{forecast.temperatureF}</td>
            <td>{forecast.summary}</td>
            <td><Link to={`/forecasts/${forecast.id}`} className="btn btn-secondary">View</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export const FetchData = () => {

  const {
    data: forecasts = [],
    isLoading,
    isSuccess,
    isError,
    error,
    refetch //use this to refresh cached data (when not using tags)
  } = useGetForecastsQuery()

  let content;
  if (isLoading) {
    content = <span>Loading...</span>
  }
  else if (isError) {
    content = <span>{error.toString()}</span>
  }
  else if (isSuccess) {
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
