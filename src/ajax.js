export function saveData(data) {
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/sendTrainData');
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
        console.log('ok');
      }
    }
  }
}
