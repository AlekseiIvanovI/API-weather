const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const city = document.querySelector('.search-box input').value;

search.addEventListener('click', () => {

    const APIKey = '22bc305d5bc1f7bc1b534f291ad335ba';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    //fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)

            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');
            const temp_max = document.querySelector('.max');
            const temp_min = document.querySelector('.min');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    document.querySelector('body').style.backgroundImage = 'url(images/sun-3588618.jpg)'
                    document.querySelector('body').style.backgroundSize = 'cover'
                    document.querySelector('body').style.backgroundPosition = 'center';
                    document.querySelector('body').style.backgroundRepeat = 'no-repeat';
                    break;

                case 'Rain':
                    image.src = 'images/rain.png';
                    document.querySelector('body').style.backgroundImage = 'url(images/water-815271.jpg)'
                    document.querySelector('body').style.backgroundSize = 'cover'
                    document.querySelector('body').style.backgroundPosition = 'center';
                    document.querySelector('body').style.backgroundRepeat = 'no-repeat';
                    break;

                case 'Snow':
                    image.src = 'images/snow.png';
                    document.querySelector('body').style.backgroundImage = 'url(images/snow-4668099.jpg)'
                    document.querySelector('body').style.backgroundSize = 'cover'
                    document.querySelector('body').style.backgroundPosition = 'center';
                    document.querySelector('body').style.backgroundRepeat = 'no-repeat';
                    break;

                case 'Clouds':
                    image.src = 'images/cloud.png';
                    document.querySelector('body').style.backgroundImage = 'url(images/sky-3294543.jpg)'
                    document.querySelector('body').style.backgroundSize = 'cover'
                    document.querySelector('body').style.backgroundPosition = 'center';
                    document.querySelector('body').style.backgroundRepeat = 'no-repeat';
                    break;

                case 'Haze':
                    image.src = 'images/mist.png';
                    document.querySelector('body').style.backgroundImage = 'url(images/fog-1535201.jpg)'
                    document.querySelector('body').style.backgroundSize = 'cover'
                    document.querySelector('body').style.backgroundPosition = 'center';
                    document.querySelector('body').style.backgroundRepeat = 'no-repeat';
                    break;

                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
            temp_max.innerHTML = `${parseInt(json.main.temp_max)}<span>°C</span>`
            temp_min.innerHTML = `${parseInt(json.main.temp_min)}<span>°C</span>`

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '930px';
            container.style.width = '630px';


        });


});




// fetch('https://api.chucknorris.io/jokes/random')
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         document.querySelector('.joke').innerText = data.value; 
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });







    // fetch(`https://newsdata.io/api/1/news?apikey=pub_33243884407b24432fcbac1814b85d50d5545&category=business,domestic,education,entertainment,environment&language=en`)
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data);
    //   let i = 0; // Initialize index
      
    //   // Function to update news information
    //   function updateNews() {
    //     // Check if index is within the array bounds
    //     if (i < data.results.length) {
    //       document.querySelector('.news').innerText = data.results[i].content;
    //       document.querySelector('.news_img').src = data.results[i].image_url;
    //       i++; // Increment index
    //     } else {
    //       i = 0; // Reset index to start from the beginning
    //     }
    //   }
      
    //   // Initial update
    //   updateNews();
      
    //   // Set interval to update news every 5 seconds
    //   const newsInterval = setInterval(updateNews, 5000);
    // })
    // .catch(err => {
    //   console.log(`error ${err}`);
    // });










    fetch(`https://newsdata.io/api/1/news?apikey=pub_33243884407b24432fcbac1814b85d50d5545&language=en `)
    //fetch(`https://newsdata.io/api/1/news?apikey=pub_33243884407b24432fcbac1814b85d50d5545&category=business,domestic,education,entertainment,environment`)

    .then(res => res.json())
    .then(data => {
      console.log(data);
      let i = 0; // Initialize index

      
      
      // Function to update news information
      function updateNews() {
        // Check if index is within the array bounds
        if (i < data.results.length) {
          document.querySelector('.news').innerText = data.results[i].title;
          document.querySelector('.description_news').innerText = data.results[i].description;
          document.querySelector('.creator').innerText = data.results[i].creator;
          document.querySelector('.country').innerText = data.results[i].country;
          i++; // Increment index
        } else {
          i = 0; // Reset index to start from the beginning
        }
      }
      
      // Initial update
      updateNews();
      
      // Set interval to update news every 5 seconds
      const newsInterval = setInterval(updateNews, 5000);
    })
    .catch(err => {
      console.log(`error ${err}`);
    });

