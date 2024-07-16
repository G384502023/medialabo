let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
document.addEventListener('DOMContentLoaded', function () {
  const resultDiv = document.querySelector('#result');
  const btn = document.querySelector('#btn');

  btn.addEventListener('click', function () {
      const select = document.querySelector('#kensaku');
      const idx = select.selectedIndex;  
      const options = select.querySelectorAll('option'); 
      const option = options.item(idx);  

      console.log('選択された ' + idx + ' 番目の option の情報:');
      console.log('  value=' + option.getAttribute('value'));  
      console.log('  textContent=' + option.textContent);

      const data = {
          name: option.textContent,
          weather: [{ description: '晴れ' }],
          main: { temp_max: '30°C', temp_min: '20°C', humidity: '50%' },
          wind: { speed: '5m/s', deg: '180°' }
      };

      const h1 = document.createElement('h1');
      h1.textContent = '世界の天気の検索結果';

      const p = document.createElement('p');
      p.textContent = `検索キー: ${data.name}`;

      const table = document.createElement('table');
      table.setAttribute('border', '1');

      const trHeader = document.createElement('tr');
      const headers = ['天気', '最高気温', '最低気温', '湿度', '風速', '風向'];
      headers.forEach(headerText => {
          const th = document.createElement('th');
          th.textContent = headerText;
          table.appendChild(th);
      });

      const trData = document.createElement('tr');
      const weatherData = [
          data.weather[0].description,
          data.main.temp_max,
          data.main.temp_min,
          data.main.humidity,
          data.wind.speed,
          data.wind.deg
      ];
      weatherData.forEach(dataText => {
          const td = document.createElement('td');
          td.textContent = dataText;
          trData.appendChild(td);
      });
      table.appendChild(trData);

      resultDiv.innerHTML = '';  // 以前の結果をクリア
  });
});








    









