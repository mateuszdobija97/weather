export const GET_WEATHER = "GET_WEATHER";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_ALERT = "SET_ALERT";

export interface WeatherData {
    coord: {
        lon: number,
        lat: number
      },
      weather: [
        {
          id: number,
          main: string,
          description: string,
          icon: string
        }
      ],
      base: string,
      main: {
        temp: number,
        pressure: number,
        humidity: number,
        temp_min: number,
        temp_max: number
      },
      visibility: number,
      timezone: number
      wind: {
        speed: number,
        deg: number
      },
      clouds: {
        all: number
      },
      dt: number,
      sys: {
        type: number,
        id: number,
        message: number,
        country: string,
        sunrise: number,
        sunset: number
      },
      id: number,
      name: string,
      cod: number
};

export interface WeatherError {
    cod: string,
    message: string
};

export interface WeatherState {
    data: WeatherData | null,
    loading: boolean,
    error: string
};

interface GetWeatherAction {
    type: typeof GET_WEATHER,
    payload: WeatherData
};

interface SetLoadingAction {
    type: typeof SET_LOADING,
};

interface SetErrorAction {
    type: typeof SET_ERROR,
    payload: string
};

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction;

export interface AlertAction {
    type: typeof SET_ALERT,
    payload: string
};

export interface AlertState {
    message: string
};