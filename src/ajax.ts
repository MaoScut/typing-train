

export function saveData(data:any): Promise<null> {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/sendTrainData');
    xhr.onreadystatechange = function a() {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          resolve();
        }
      }
    };
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify(data));
  });
}

export function fetchStaticsData(): Promise<string> {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/fetchStaticsData');
    xhr.onreadystatechange = function a() {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          resolve(xhr.responseText);
        }
      }
    };
    xhr.send();
  });
}

export function staticsData(): Promise<string> {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/staticsData');
    xhr.onreadystatechange = function a() {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          resolve(xhr.responseText);
        }
      }
    };
    xhr.send();
  });
}
