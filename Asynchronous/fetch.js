function fetchDataFromAPI(callback) {
  fetch('https://6717a745b910c6a6e0294dfb.mockapi.io/api/v1/khachsan')
      .then(response => response.json())
      .then(data => callback(null, data))
      .catch(error => callback(error, null));
}
  
  function handleAPIData(error, data) {
    if (error) {
      console.log('Đã xảy ra lỗi khi lấy dữ liệu từ API:', error);
    } else {
      console.log('Dữ liệu từ API:', data);
    }
  }
  
  fetchDataFromAPI(handleAPIData);