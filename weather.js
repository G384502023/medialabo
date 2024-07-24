document.addEventListener('DOMContentLoaded', function () {
  btn = document.querySelector('#btn');
  btn.addEventListener('click', sendRequest);
});

function sendRequest() {
 select = document.querySelector('#kensaku');
 cityId = select.value;



  const url = `https://www.nishita-lab.org/web-contents/jsons/openweather/${cityId}.json`;

  axios.get(url)
      .then(showResult)   
      .catch(showError)   
      .then(finish);      
}


function showResult(resp) {
  const data = resp.data;

 weather = data.weather[0].description;
 tempMax = data.main.temp_max;
 tempMin = data.main.temp_min;
 humidity = data.main.humidity;
 windSpeed = data.wind.speed;
 windDirection = data.wind.deg;

  const resultTable = document.querySelector('#weatherData');
  resultTable.innerHTML = `
      <tr>
          <td>${weather}</td>
          <td>${tempMax}</td>
          <td>${tempMin}</td>
          <td>${humidity}</td>
          <td>${windSpeed}</td>
          <td>${windDirection}</td>
      </tr>
  `;
}


function showError(err) {
  console.log(err);
  alert('データの取得に失敗しました');
}


function finish() {
  console.log('Ajax 通信が終わりました');
}









    









