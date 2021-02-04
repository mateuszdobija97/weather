import React, { FC, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux';

import { setAlert } from '../store/actions/alertActions';
import { getWeather, setLoading } from '../store/actions/weatherActions';

const Search:FC = () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');

    const handleOnChange = (e: FormEvent<HTMLInputElement>) => setCity(e.currentTarget.value);

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(city.trim() === '') {
            dispatch(setAlert('City is required!'));
        }

        dispatch(setLoading());
        dispatch(getWeather(city));
        setCity('');
    }
    
    return (
        <div className="app__search">
            <h1>Search your city!</h1>
            <form onSubmit={submitForm}>
                <input value={city} onChange={handleOnChange} type="text"/>
                <button>Szukaj</button>
            </form>
        </div>
    )
}

export default Search
