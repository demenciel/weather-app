function backgroundChange(weather) {
    if (weather === 'Rain') {
        $('.card').addClass('rain');
        $('.card').removeClass('sunny');
        $('.card').removeClass('haze');
        $('.card').removeClass('clouds');
    } else if (weather === 'Clouds') {
        $('.card').addClass('clouds');
        $('.card').removeClass('sunny');
        $('.card').removeClass('haze');
        $('.card').removeClass('rain');
    } else if (weather === 'Clear') {
        $('.card').addClass('sunny');
        $('.card').removeClass('rain');
        $('.card').removeClass('haze');
        $('.card').removeClass('clouds');
    } else if (weather === 'Haze') {
        $('.card').addClass('haze');
        $('.card').removeClass('sunny');
        $('.card').removeClass('rain');
        $('.card').removeClass('clouds');
    }
    else {
        $('.card').addClass('rain');
    }
}

// Loaded Page Default

function geoLocation() {
    if ('geolocation' in navigator) {

        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            let url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';
    
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

$('#mobile-icon').click(

    function geoLocation() {
        if ('geolocation' in navigator) {

            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let long = position.coords.longitude;
                let url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';
        
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
    });

// Get location from input

$('.search-icon').click(
    function () {
        var city = document.querySelector('#search-city').value;

        const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';
          
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



 