// Hamburger Menü İşlevselliği
document.querySelector('.menu-toggle').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
});

// API'ye istek göndererek hava durumu verilerini alacak fonksiyon
function getWeather() {
    const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=47.099998&longitude=9.066667&current=temperature_2m,wind_speed_10m';

    // API'ye GET isteği gönderme
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Güncel hava durumu verilerini işleme
            const currentData = data.current;
            const temperature = currentData.temperature_2m;
            const windSpeed = currentData.wind_speed_10m;

            // Hava durumu verilerini HTML içinde gösterme
            document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
            document.getElementById('windSpeed').textContent = `Wind Speed: ${windSpeed} m/s`;

            // "Näfels" bilgisini HTML içinde gösterme
            document.getElementById('location').textContent = 'Näfels';
        })
        .catch(error => {
            console.error('No info available:', error);
        });
}

// Sayfa yüklendiğinde hava durumu verilerini al
window.onload = getWeather;