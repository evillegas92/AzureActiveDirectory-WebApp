import React from 'react'
import { useGetForecastQuery } from '../redux/slices/apiSlice'

export const ForecastDetailsPage = ({ match }) => {
    const { forecastId } = match.params

    const { data: forecast, isFetching, isSuccess } = useGetForecastQuery(forecastId);

    let content
    if (isFetching) {
        content = <span>Loading...</span>
    } else if (isSuccess) {
        content = (
            <div className='row'>
                <div className='col'>
                    <p>{forecast.summary}</p>
                </div>
                <div className='col'>
                    <p>{forecast.date}</p>
                </div>
                <div className='col'>
                    <p>{forecast.temperatureC}</p>
                </div>
                <div className='col'>
                    <p>{forecast.temperatureF}</p>
                </div>
            </div>
        )
    }

    return (
        <section>
            <article>
                {content}
            </article>
        </section>
    )
}