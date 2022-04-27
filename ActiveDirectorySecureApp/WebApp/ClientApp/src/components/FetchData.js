import React, { Component } from "react";
import { connect } from "react-redux";
import * as forecastActions from "../redux/actions/forecastActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class FetchData extends Component {
  static displayName = FetchData.name;

  state = {
    forecasts: [],
    loading: true,
    forecast: {
      summary: "",
    },
  };

  componentDidMount() {
    this.populateWeatherData();
  }

  handleInputChange = (event) => {
    const newForecast = { ...this.state.forecast, summary: event.target.value };
    this.setState({ forecast: newForecast });
  };
  handleNewForecastSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createForecast(this.state.forecast);
  };

  static renderForecastsTable(forecasts) {
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast) => (
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      FetchData.renderForecastsTable(this.state.forecasts)
    );

    return (
      <div>
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <h1 id="tabelLabel">Weather forecast</h1>
                <p>
                  This component demonstrates fetching data from the server.
                </p>
              </div>
            </div>
            <form
              onSubmit={this.handleNewForecastSubmit}
              className="row row-cols-lg-auto g-3 align-items-center"
            >
              <h3>New Forecast</h3>
              <div className="col-4">
                <input
                  type="text"
                  onChange={this.handleInputChange}
                  placeholder="Summary"
                  className="form-control"
                />
              </div>
              <div className="col-2">
                <input type="submit" value="Add" className="btn btn-primary" />
              </div>
            </form>
            <div className="row">
              <div className="col">{contents}</div>
            </div>
            <div className="row">
              <div className="col">
                <h3>New forecasts</h3>
                <ul>
                  {this.props.newForecasts.map((fc) => (
                    <li key={fc.summary}>{fc.summary}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch("weatherforecast");
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}

FetchData.propTypes = {
  newForecasts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    newForecasts: state.newForecasts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(forecastActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchData);
