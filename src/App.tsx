import React from 'react'
import { useSelector } from 'react-redux';

import Search from './components/Search'
import Weather from './components/Weather';
import { RootState } from './store';

const App = () => {
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);

  return (
    <div className="app">
      <Search />
      {loading ? <p>Loading...</p> : weatherData && <Weather weatherData={weatherData} />}
    </div>
  )
}

export default App
