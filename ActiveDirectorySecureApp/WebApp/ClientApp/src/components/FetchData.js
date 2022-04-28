import React, { Component } from "react";
import { connect } from "react-redux";
import * as forecastActions from "../redux/actions/forecastActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class FetchData extends Component {

  componentDidMount() {
    if (this.props.forecasts.length === 0) {
      this.props.actions.loadForecasts()
        .catch(error => {
          alert('Error loading data: ' + error);
        });
    }
  }

  render() {
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
                {this.props.forecasts.map((forecast) => (
                  <tr key={forecast.date}>
                    <td>{forecast.date}</td>
                    <td>{forecast.temperatureC}</td>
                    <td>{forecast.temperatureF}</td>
                    <td>{forecast.summary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

FetchData.propTypes = {
  forecasts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    forecasts: state.forecasts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(forecastActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchData);
