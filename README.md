# Weather App

A simple weather app that displays the current weather conditions of a user-specified city. This project is built using HTML, CSS, JavaScript, and jQuery. It utilizes the OpenWeatherMap API to fetch real-time weather data.

## Features

- Users can search for a city to get the current weather conditions
- The app displays the city name, weather condition, and temperature in Celsius
- The background of the app changes according to the weather condition (Rain, Clouds, Clear, Haze)

## Getting Started

To use this app, simply clone this repository and open `index.html` in your preferred browser.

### Prerequisites

You need an API key from OpenWeatherMap to use the API. Replace `your_api_key` in the following line with your actual API key:
```
const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=your_api_key&units=metric';
```

## Built With

- HTML
- CSS
- JavaScript
- jQuery

## API Used

- [OpenWeatherMap](https://openweathermap.org/api) - Weather data API

## Acknowledgments

- Icons from [Font Awesome](https://fontawesome.com/)
- Background images for weather conditions from [Unsplash](https://unsplash.com/)
