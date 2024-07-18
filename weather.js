document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('#btn');
  btn.addEventListener('click', sendRequest);
});

// 通信を開始する処理
function sendRequest() {
  const select = document.querySelector('#kensaku');
  const cityId = select.value;



  // URL を設定
  const url = `https://www.nishita-lab.org/web-contents/jsons/openweather/${cityId}.json`;

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
  const data = resp.data;

  const weather = data.weather[0].description;
  const tempMax = data.main.temp_max;
  const tempMin = data.main.temp_min;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const windDirection = data.wind.deg;

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

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
  alert('データの取得に失敗しました');
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}









    









