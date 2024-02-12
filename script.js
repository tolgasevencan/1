// Hamburger Menü İşlevselliği
document.querySelector('.menu-toggle').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
});

// API'ye istek göndererek hava durumu verilerini alacak fonksiyon
function getWeather() {
    const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m';

    // API'ye GET isteği gönderme
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Güncel hava durumu verilerini işleme
            const currentData = data.current;
            const temperature = currentData.temperature_2m;
            const windSpeed = currentData.wind_speed_10m;

            // Hava durumu verilerini HTML içinde gösterme
            document.getElementById('temperature').textContent = `Sıcaklık: ${temperature}°C`;
            document.getElementById('windSpeed').textContent = `Rüzgar Hızı: ${windSpeed} m/s`;
        })
        .catch(error => {
            console.error('Hava durumu verisi alınamadı:', error);
        });
}

// Sayfa yüklendiğinde hava durumu verilerini al
window.onload = getWeather;