function backgroundChange(weather) {
    const weatherClasses = ['rain', 'clouds', 'sunny', 'haze'];
    $('.card').removeClass(weatherClasses.join(' '));

    switch (weather) {
        case 'Rain':
            $('.card').addClass('rain');
            break;
        case 'Clouds':
            $('.card').addClass('clouds');
            break;
        case 'Clear':
            $('.card').addClass('sunny');
            break;
        case 'Haze':
            $('.card').addClass('haze');
            break;
        default:
            $('.card').addClass('rain');
            break;
    }
}

// Loaded Page Default
function geoLocation() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            let url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=' + config.apiKey + '&units=metric';
    
            $.ajax({
                url: url,
                type: "GET",
                dataType: 'json',
                success: (data) => {
                    $('#city').text(data.name)
                    $('#condition').text(data.weather[0].main);
                    $('h1').text(Math.round(data.main.temp));
    
                    backgroundChange(data.weather[0].main);
                },
                error: () => {
                    return false
                }
            });
        })
    };
}
geoLocation();
// Get location from icon clicked
$('#mobile-icon').click(geoLocation);

// Get location from input
function fetchData() {
    var city = document.querySelector('#search-city').value;
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=' + config.apiKey + '&units=metric';
    $.ajax({
        url: url,
        type: "GET",
        dataType: 'json',
        success: (data) => {
            $('#city').text(data.name)
            $('#condition').text(data.weather[0].main);
            $('h1').text(Math.round(data.main.temp));

            backgroundChange(data.weather[0].main);
        },
        error: () => {
            return false
        }
    });  
}
$('.search-icon').click(fetchData);
$('.searchLocation').submit(function(event) {
    event.preventDefault();
    fetchData();
});
backgroundChange('Sunny');

// GET DATE
function getDate() {
    let dateActuelle = new Date();
    let dateLocale = dateActuelle.toLocaleString(navigator.language, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    $('#date').html(dateLocale);
}
function getHour() {
    let date = new Date();
    let dateLocale = date.toLocaleString(navigator.language, {
        hour: 'numeric',
        minute: 'numeric'
    });

    $('#hour').html(dateLocale);
};
getDate();
getHour();