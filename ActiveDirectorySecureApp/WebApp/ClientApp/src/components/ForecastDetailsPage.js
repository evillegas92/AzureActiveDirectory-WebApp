import React from 'react'
import { useSelector } from 'react-redux'
import { selectForecastById } from '../redux/slices/forecastsSlice'

export const ForecastDetailsPage = ({ match }) => {
  const { forecastId } = match.params

  const forecast = useSelector(state => selectForecastById(state, forecastId));

  if (!forecast) {
    return (
      <section>
        <h2>Forecast not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{forecast.summary}</h2>
        <p>{forecast.date}</p>
      </article>
    </section>
  )
}